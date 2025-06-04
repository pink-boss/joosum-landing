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
        "px-4 py-2 text-sm",
        "md:px-5 md:py-3 md:text-base",
        "lg:px-6 lg:py-3 lg:text-lg"
      )}
    >
      {children}
    </div>
  );
}
