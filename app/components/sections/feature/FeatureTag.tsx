import { ReactNode } from "react";
import clsx from "clsx";

interface FeatureTagProps {
  children: ReactNode;
}

export default function FeatureTag({ children }: FeatureTagProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center bg-white rounded-full border border-neutral-200 text-neutral-800 font-medium whitespace-nowrap",
        "px-5 py-3 text-base",
        "md:px-4 md:py-4 md:text-2xl",
        "lg:px-7 lg:py-5 lg:text-3xl"
      )}
    >
      {children}
    </div>
  );
}
