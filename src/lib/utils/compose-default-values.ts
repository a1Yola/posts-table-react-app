import type { FieldConfig } from "@/components/add-post-form/types";

export const composeDefaultValues = (fields: FieldConfig[]) =>
  fields.reduce((acc: Record<string, unknown>, field) => {
    if (field.defaultValue !== undefined) {
      acc[field.name] = field.defaultValue;
    }

    return acc;
  }, {});
