
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
  status: "draft" | "published";
  readingTime?: number;
  category?: string;
}
