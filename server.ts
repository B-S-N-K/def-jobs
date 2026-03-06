import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { getSupabaseClient, getSupabaseAdminClient } from "./src/lib/supabase";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

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
            tags: job.tags || [],
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
      const { title, company, location, type, salary, description, tags, featured } = req.body;

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
            featured: featured ? 1 : 0,
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