import { z } from "zod";

import type { FieldConfig } from "../types";

const textValidator = (min?: number, max?: number) => {
  let validator = z
    .string()
    .trim()
    .regex(/^[^<>]*$/, "Недопустимые символы");

  if (min !== undefined) {
    validator = validator.min(min, `Минимум ${min} символов`);
  }

  if (max !== undefined) {
    validator = validator.max(max, `Максимум ${max} символов`);
  }

  return validator;
};

const numberValidator = () =>
  z.number().nonnegative("Число должно быть положительным");

export const createPostFormSchema = (fields: FieldConfig[]) => {
  const schema: z.ZodRawShape = {};

  fields.forEach((field) => {
    let fieldSchema: z.ZodTypeAny;

    switch (field.type) {
      case "text":
        fieldSchema = textValidator(field.min, field.max);
        break;

      case "number":
        fieldSchema = numberValidator();
        break;

      case "boolean":
        fieldSchema = z.boolean().default(false);
        break;

      default:
        fieldSchema = z.unknown();
    }

    if (!field.required) {
      fieldSchema = fieldSchema.optional().nullable();
    }

    schema[field.name] = fieldSchema;
  });

  return z.object(schema).transform((data) => {
    const { author, tags, ...cleanData } = data;

    const transformedTags =
      typeof tags === "string"
        ? tags
            .split(/[,\s]+/)
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];

    return {
      ...cleanData,
      author: { name: author },
      tags: transformedTags,
    };
  });
};
