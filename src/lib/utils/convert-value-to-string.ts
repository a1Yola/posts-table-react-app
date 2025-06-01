export const convertValueToString = (value: unknown) => {
  if (value === null || value === undefined) return "";

  switch (typeof value) {
    case "object":
      if (Array.isArray(value)) return value.join(", ");

      return String(Object.values(value).filter(Boolean)[0] ?? "");

    case "boolean":
      return value ? "✅ Yes" : "❌ No";

    case "number":
      return value.toLocaleString();

    default:
      return String(value);
  }
};
