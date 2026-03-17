import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { getSupabaseClient, getSupabaseAdminClient } from "./src/lib/supabase";
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'] as string;
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
      console.error('Webhook signature verification failed:', err);
      return res.status(400).send(`Webhook Error: ${err}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      console.log('Payment completed:', session.id);

      if (session.customer_details?.email) {
        await resend.emails.send({
          from: 'DefJobs <onboarding@resend.dev>',
          to: session.customer_details.email,
          subject: 'Your DefJobs order is confirmed!',
          html: `
            <h2>Payment Confirmed ✅</h2>
            <p>Thank you for your purchase on DefJobs.</p>
            <p>You can now post your job listing at <a href="https://defjobs.eu/post-job">this link</a>.</p>
            <p>If you need any help, reply to this email.</p>
            <br/>
            <p>The DefJobs Team</p>
          `
        });
      }

      await resend.emails.send({
        from: 'DefJobs <onboarding@resend.dev>',
        to: 'hello@defjobs.eu',
        subject: `New payment received!`,
        html: `
          <h2>New Payment 💰</h2>
          <p><strong>Amount:</strong> €${(session.amount_total / 100).toFixed(2)}</p>
          <p><strong>Customer:</strong> ${session.customer_details?.email}</p>
          <p><strong>Plan:</strong> ${session.metadata?.planName || 'Unknown'}</p>
        `
      });
    }

    res.json({ received: true });
  });

  // Middleware to parse JSON bodies
  app.use(express.json());

  const supabase = getSupabaseClient();
  const supabaseAdmin = getSupabaseAdminClient();

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/jobs", async (req, res) => {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .is("deleted_at", null)
        .order("featured", { ascending: false })
        .order("posted_at", { ascending: false });

      if (error) {
        console.error("Supabase error (jobs list):", error);
        return res.status(500).json({ error: "Failed to fetch jobs" });
      }

      const jobsWithTags =
        (data || []).map((job: any) => {
          const date = job.posted_at ? new Date(job.posted_at) : new Date();
          const euDate = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}.${date.getFullYear()}`;

            return {
              ...job,
              tags: typeof job.tags === 'string' ? JSON.parse(job.tags) : (job.tags || []),
              postedAt: euDate,
            };
        }) ?? [];

      res.json(jobsWithTags);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch jobs" });
    }
  });

  app.post("/api/jobs", async (req, res) => {
    try {
      const { title, company, location, type, salary, description, tags, featured, language } = req.body;

      const { data, error } = await supabaseAdmin
        .from("jobs")
        .insert([
          {
            title,
            company,
            location,
            type,
            salary,
            description,
            tags: JSON.stringify(tags ?? []),
            featured: featured ? true : false,
            language: language ?? 'en',
          },
        ])
        .select("id")
        .single();

      if (error) {
        console.error("Supabase error (create job):", error);
        return res.status(500).json({ error: "Failed to create job" });
      }

      res.json({ id: data?.id, success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to create job" });
    }
  });

  app.get("/api/jobs/:id", async (req, res) => {
    try {
      const { id } = req.params;

      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", id)
        .single();

      if (error && error.code !== "PGRST116") {
        console.error("Supabase error (job detail):", error);
        return res.status(500).json({ error: "Failed to fetch job" });
      }

      if (!data) {
        return res.status(404).json({ error: "Job not found" });
      }

      const job: any = { ...data };
      job.tags = job.tags || [];

      const date = job.posted_at ? new Date(job.posted_at) : new Date();
      job.postedAt = `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}.${date.getFullYear()}`;

      res.json(job);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch job" });
    }
  });

  app.get("/api/admin/trash", async (req, res) => {
    try {
      const { data, error } = await supabaseAdmin
        .from("jobs")
        .select("*")
        .not("deleted_at", "is", null)
        .order("deleted_at", { ascending: false });
      if (error) return res.status(500).json({ error: "Failed to fetch trash" });
      res.json(data || []);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trash" });
    }
  });
  
  app.get("/api/admin/applications", async (req, res) => {
    try {
      const { data, error } = await supabaseAdmin
        .from("applications")
        .select("*, jobs(title, company)")
        .order("created_at", { ascending: false });
      if (error) return res.status(500).json({ error: "Failed to fetch applications" });
      res.json(data || []);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  app.get("/api/admin/alerts", async (req, res) => {
    try {
      const { data, error } = await supabaseAdmin
        .from("alerts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) return res.status(500).json({ error: "Failed to fetch alerts" });
      res.json(data || []);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch alerts" });
    }
  });

  app.get("/api/admin/contacts", async (req, res) => {
    try {
      const { data, error } = await supabaseAdmin
        .from("contacts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) return res.status(500).json({ error: "Failed to fetch contacts" });
      res.json(data || []);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  app.delete("/api/jobs/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { error } = await supabaseAdmin
        .from("jobs")
        .update({ deleted_at: new Date().toISOString() })
        .eq("id", id);
      if (error) return res.status(500).json({ error: "Failed to delete job" });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete job" });
    }
  });

  app.post("/api/jobs/:id/restore", async (req, res) => {
    try {
      const { id } = req.params;
      const { error } = await supabaseAdmin
        .from("jobs")
        .update({ deleted_at: null })
        .eq("id", id);
      if (error) return res.status(500).json({ error: "Failed to restore job" });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to restore job" });
    }
  });

  app.delete("/api/jobs/:id/permanent", async (req, res) => {
    try {
      const { id } = req.params;
      const { error } = await supabaseAdmin
        .from("jobs")
        .delete()
        .eq("id", id);
      if (error) return res.status(500).json({ error: "Failed to permanently delete job" });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to permanently delete job" });
    }
  });

  app.patch("/api/jobs/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { featured } = req.body;
      const { error } = await supabaseAdmin
        .from("jobs")
        .update({ featured })
        .eq("id", id);
      if (error) return res.status(500).json({ error: "Failed to update job" });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to update job" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      const { error } = await supabaseAdmin.from("contacts").insert([
        {
          name,
          email,
          message,
        },
      ]);

      if (error) {
        console.error("Supabase error (contact):", error);
        return res.status(500).json({ error: "Failed to send message" });
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });
  
  app.post("/api/create-checkout", async (req, res) => {
    try {
      const { priceId, planName } = req.body;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        success_url: `${req.headers.origin}/payment-success?plan=${planName}`,
        cancel_url: `${req.headers.origin}/pricing`,
        metadata: { planName },
      });

      res.json({ url: session.url });
    } catch (error) {
      console.error('Stripe error:', error);
      res.status(500).json({ error: 'Failed to create checkout session' });
    }
  });

  app.post("/api/alerts", async (req, res) => {
    try {
      const { email, keyword, location, jobFunction, jobType } = req.body;

      const { error } = await supabaseAdmin.from("alerts").insert([
        {
          email,
          keyword,
          location,
          job_function: jobFunction,
          job_type: jobType,
        },
      ]);

      if (error) {
        console.error("Supabase error (create alert):", error);
        return res.status(500).json({ error: "Failed to create alert" });
      }

      res.json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to create alert" });
    }
  });
  
  app.get("/api/companies", async (req, res) => {
    try {
      const { data, error } = await supabase
        .from("companies")
        .select("*")
        .order("name", { ascending: true });

      if (error) {
        console.error("Supabase error (companies):", error);
        return res.status(500).json({ error: "Failed to fetch companies" });
      }

      res.json(data || []);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to fetch companies" });
    }
  });

  const multer = (await import('multer')).default;
  const storage_multer = multer.memoryStorage();
  const upload = multer({ storage: storage_multer });

  app.get("/api/admin/cv-url/:fileName", async (req, res) => {
    try {
      const { fileName } = req.params;
      const { data, error } = await supabaseAdmin.storage
        .from('cvs')
        .createSignedUrl(fileName, 3600);
      if (error) return res.status(500).json({ error: 'Failed to generate URL' });
      res.json({ url: data.signedUrl });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate URL' });
    }
  });
  
  app.post("/api/upload-cv", upload.single('cv'), async (req, res) => {
    try {
      if (!req.file) return res.status(400).json({ error: 'No file provided' });

      const fileName = `${Date.now()}-${req.file.originalname.replace(/\s+/g, '-')}`;
      
      const { error } = await supabaseAdmin.storage
        .from('cvs')
        .upload(fileName, req.file.buffer, {
          contentType: 'application/pdf'
        });

      if (error) {
        console.error('Storage error:', error);
        return res.status(500).json({ error: 'Failed to upload CV' });
      }

      res.json({ fileName });
    } catch (error) {
      console.error('Upload error:', error);
      res.status(500).json({ error: 'Failed to upload CV' });
    }
  });
  
  app.post("/api/applications", async (req, res) => {
    try {
      const { jobId, name, email, message, cvUrl } = req.body;

      const { error } = await supabaseAdmin.from("applications").insert([
        {
          job_id: jobId,
          name,
          email,
          message,
          cv_url: cvUrl,
        },
      ]);

      if (error) {
        console.error("Supabase error (create application):", error);
        return res.status(500).json({ error: "Failed to submit application" });
      }

      // Send email notification
      await resend.emails.send({
        from: 'DefJobs <onboarding@resend.dev>',
        to: 'hello@defjobs.eu',
        subject: `New Application: ${name}`,
        html: `
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Job ID:</strong> ${jobId}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          <p><strong>CV:</strong> ${cvUrl}</p>
          <br/>
          <a href="https://defjobs.eu/admin/dashboard">View in Admin Panel</a>
        `
      });

      res.json({ success: true });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Failed to submit application" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();