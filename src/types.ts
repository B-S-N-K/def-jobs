export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description?: string;
  tags: string[];
  postedAt: string;
  posted_at: string;
  featured: boolean;
  language?: string;
  deleted_at?: string | null;
}