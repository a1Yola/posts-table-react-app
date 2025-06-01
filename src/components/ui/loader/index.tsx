import { LoaderIcon } from "@/assets/icons";
import { twMerge } from "tailwind-merge";
import type { ComponentProps } from "react";

interface LoaderProps {
  svgClass?: string;
}

export const Loader = ({
  svgClass,
  className,
  ...other
}: ComponentProps<"div"> & LoaderProps) => (
  <div
    className={twMerge("flex items-center justify-center", className)}
    {...other}
  >
    <LoaderIcon className={svgClass} />
  </div>
);
