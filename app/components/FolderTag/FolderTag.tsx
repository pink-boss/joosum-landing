import clsx from "clsx";

interface FolderTagProps {
  children: React.ReactNode;
}

export default function FolderTag({ children }: FolderTagProps) {
  return (
    <span
      className={clsx(
        "bg-white text-neutral-600 rounded-full font-bold",
        "px-4 py-3 text-base",
        "md:px-6 md:py-4 md:text-lg",
        "lg:px-7 lg:py-6 lg:text-[28px] lg:leading-[33px]"
      )}
    >
      {children}
    </span>
  );
}
