
export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  authorEmail?: string;
  authorPhoto?: string;
  keywords: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage?: string;
  status: string; // Changed from "draft" | "published" to string to match Supabase data
  readingTime?: number;
  category?: string;
  images?: string[]; // Added images array to store multiple image URLs
}
