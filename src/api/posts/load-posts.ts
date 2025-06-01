import { PAGE_LIMIT, POSTS_API_URL } from "../constants";

import type { LoadListRequest } from "@/shared";
import type { LoadPostsResponse } from "./types";

export const loadPosts = async ({
  signal,
  cursor,
}: LoadListRequest): Promise<LoadPostsResponse> => {
  const res = await fetch(
    cursor || `${POSTS_API_URL}?_per_page=${PAGE_LIMIT}&_page=1`,
    {
      signal,
    }
  );

  const data = await res.json();

  return {
    data,
    cursor: `${POSTS_API_URL}?_per_page=${PAGE_LIMIT}&_page=${data.next}`,
  };
};
