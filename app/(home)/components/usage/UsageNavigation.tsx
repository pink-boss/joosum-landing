import Image from 'next/image';

import clsx from 'clsx';

interface UsageNavigationButtonProps {
  direction: 'next' | 'previous';
  onClick: () => void;
}

export function UsageNavigationButton({
  direction,
  onClick,
}: UsageNavigationButtonProps) {
  const isPrevious = direction === 'previous';

  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex cursor-pointer items-center justify-center rounded-full py-8 transition-colors',
        'h-6 w-6',
        'md:h-12 md:w-12',
        'lg:h-12 lg:w-12',
      )}
    >
      <Image
        alt={isPrevious ? '이전' : '다음'}
        height={40}
        src={isPrevious ? '/icons/arrow-left.png' : '/icons/arrow-right.png'}
        width={40}
        className={clsx(
          'text-neutral-600',
          'text-lg',
          'md:text-xl',
          'lg:text-xl',
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
