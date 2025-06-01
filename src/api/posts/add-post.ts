import { POSTS_API_URL } from "../constants";

import type { Post } from "@/shared";
import type { AddPostRequest } from "./types";

export const addPost = async ({
  data,
  onSuccess,
  onError,
  onFinish,
}: AddPostRequest) => {
  try {
    const response = await fetch(POSTS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const newPost: Post = await response.json();

    onSuccess?.(newPost);
  } catch (error) {
    console.error("Ошибка создания записи:", error);
    onError?.(error);
  } finally {
    onFinish?.();
  }
};
