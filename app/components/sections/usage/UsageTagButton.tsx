import clsx from "clsx";

interface UsageTagButtonProps {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}

export default function UsageTagButton({
  tag,
  isActive,
  onClick,
}: UsageTagButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full font-bold transition-colors",
        "px-4 py-2 text-base",
        "md:px-6 md:py-3 md:text-lg",
        "lg:px-5 lg:py-3 lg:text-[24px]",
        isActive
          ? "bg-primary-500 text-white"
          : "bg-neutral-200 text-neutral-600 hover:bg-text-10"
      )}
    >
      {tag}
    </button>
  );
}
