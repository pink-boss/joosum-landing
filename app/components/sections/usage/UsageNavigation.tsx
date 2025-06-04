import clsx from "clsx";
import Image from "next/image";

interface UsageNavigationButtonProps {
  direction: "previous" | "next";
  onClick: () => void;
}

export function UsageNavigationButton({
  direction,
  onClick,
}: UsageNavigationButtonProps) {
  const isPrevious = direction === "previous";

  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-full flex items-center justify-center transition-colors",
        "w-10 h-10",
        "md:w-12 md:h-12",
        "lg:w-12 lg:h-12"
      )}
    >
      <Image
        src={isPrevious ? "/icons/arrow-left.png" : "/icons/arrow-right.png"}
        alt={isPrevious ? "이전" : "다음"}
        width={40}
        height={40}
        className={clsx(
          "text-neutral-600",
          "text-lg",
          "md:text-xl",
          "lg:text-xl"
        )}
      />
    </button>
  );
}

interface UsageNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export default function UsageNavigation({
  onPrevious,
  onNext,
}: UsageNavigationProps) {
  return {
    previous: (
      <UsageNavigationButton direction="previous" onClick={onPrevious} />
    ),
    next: <UsageNavigationButton direction="next" onClick={onNext} />,
  };
}
