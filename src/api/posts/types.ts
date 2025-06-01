import type { PostFormData } from "@/components/add-post-form/types";
import type { Post } from "@/shared";

/* Load posts */
export interface ResponseDataWithPagination {
  data: Post[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
}

export interface LoadPostsResponse {
  data: ResponseDataWithPagination;
  cursor?: string;
}

/* Add post */
export interface AddPostRequest {
  data: PostFormData;
  onSuccess?: (newPost: Post) => void;
  onError?: (error: unknown) => void;
  onFinish?: () => void;
}
