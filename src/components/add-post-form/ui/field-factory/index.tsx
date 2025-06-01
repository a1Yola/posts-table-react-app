import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, Input } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import { CheckIcon } from "@/assets/icons";

import type { FieldConfig } from "@/components/add-post-form/types";

interface FieldFactoryProps {
  field: FieldConfig;
}

export const FieldFactory = ({ field }: FieldFactoryProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[field.name];

  const renderField = () => {
    switch (field.type) {
      case "text":
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                value={value || ""}
                onChange={onChange}
                placeholder={field.placeholder}
                autoComplete="off"
                className={twMerge(
                  "w-full min-w-3xs p-2 border rounded focus:outline-none focus:border-blue",
                  error ? "border-red-500" : "border-gray-300"
                )}
              />
            )}
          />
        );

      case "number":
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input
                type="number"
                value={value ?? ""}
                onChange={(e) => onChange(Number(e.target.value))}
                autoComplete="off"
                className={twMerge(
                  "w-full min-w-3xs p-2 border rounded focus:outline-none focus:border-blue",
                  error ? "border-red-500" : "border-gray-300"
                )}
              />
            )}
          />
        );

      case "boolean":
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: { value, onChange } }) => (
              <div className="flex items-center gap-1">
                <Checkbox
                  checked={value}
                  onChange={onChange}
                  className="group block size-4 rounded border bg-white data-checked:bg-blue-500"
                >
                  <CheckIcon />
                </Checkbox>
                <label className="text-sm">{field.label}</label>
              </div>
            )}
          />
        );

      default:
        return false;
    }
  };

  return (
    <div className="mb-4">
      {field.type !== "boolean" && (
        <label className="block text-sm font-medium mb-1">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {renderField()}

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message === "Required"
            ? "Обязательное поле"
            : typeof error.message === "string"
            ? error.message
            : "Ошибка валидации"}
        </p>
      )}

      {field.description && !error && (
        <p className="text-gray-500 text-xs mt-1">{field.description}</p>
      )}
    </div>
  );
};
