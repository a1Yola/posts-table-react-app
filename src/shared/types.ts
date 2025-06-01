interface Author {
  name: string;
  [key: string]: unknown;
}

export interface Post {
  id: number;
  title: string | null;
  views: number | null;
  published: boolean;
  author: Author | null;
  tags: string[];
  [key: string]: unknown;
}

export interface LoadListRequest {
  signal: AbortSignal;
  cursor?: string;
}
