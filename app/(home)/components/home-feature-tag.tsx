import { ReactNode } from 'react';

import { clsx } from '@/utils/clsx';

interface Props {
  children: ReactNode;
}

export default function HomeFeatureTag({ children }: Props) {
  return (
    <div
      className={clsx(
        'flex items-center justify-center rounded-full border border-neutral-200 bg-white font-medium whitespace-nowrap text-neutral-800',
        'px-5 py-3 text-base',
        'md:px-4 md:py-4 md:text-2xl',
        'lg:px-7 lg:py-5 lg:text-3xl',
      )}
    >
      {children}
    </div>
  );
}
