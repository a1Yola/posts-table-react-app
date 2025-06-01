import type { Post } from "@/shared";

/* loadPosts */
export interface ResponseData {
  data: Post[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

export interface LoadPostsResponse {
  data: ResponseData;
  cursor?: string;
}
