import { clsx } from '@/utils/clsx';

interface Props {
  tag: string;
  isActive: boolean;
  onClick: () => void;
}

export default function HomeUsageTagButton({ tag, isActive, onClick }: Props) {
  return (
    <button
      data-testid="usageTab_main_landing"
      type="button"
      onClick={onClick}
      className={clsx(
        'cursor-pointer rounded-full font-bold transition-colors',
        'px-4 py-2 text-base',
        'md:px-6 md:py-3 md:text-lg',
        'lg:px-5 lg:py-3 lg:text-[24px]',
        isActive ? 'bg-primary-500 text-white' : 'hover:bg-text-10 bg-neutral-200 text-neutral-600',
      )}
    >
      {tag}
    </button>
  );
}
