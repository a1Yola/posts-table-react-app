import type { z } from "zod";
import type { createPostFormSchema } from "./config";

export type FieldType = "text" | "number" | "boolean";

export interface FieldConfig {
  name: string;
  label?: string;
  type: FieldType;
  placeholder?: string;
  description?: string;
  defaultValue?: unknown;
  required?: boolean;
  min?: number;
  max?: number;
}

export type PostFormData = z.infer<ReturnType<typeof createPostFormSchema>>;
