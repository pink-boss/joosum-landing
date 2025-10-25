import { useMemo } from 'react';

import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';

interface Props {
  direction: 'next' | 'previous';
  onClick: () => void;
}

export default function HomeUsageNavigationButton({ direction, onClick }: Props) {
  const isPrevious = useMemo(() => direction === 'previous', [direction]);

  return (
    <button
      className="flex cursor-pointer items-center justify-center rounded-full transition-colors"
      type="button"
      onClick={onClick}
    >
      {isPrevious ? (
        <ArrowLeftIcon aria-label="이전" className="text-tertiary-30 size-6 md:size-10 lg:size-12" />
      ) : (
        <ArrowRightIcon aria-label="다음" className="text-tertiary-30 size-6 md:size-10 lg:size-12" />
      )}
    </button>
  );
}
