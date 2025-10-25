'use client';

import { clsx } from '@/utils/clsx';
import { openJoosumApp } from '@/utils/device-utils';

export default function HomeHeroButton() {
  return (
    <button
      data-testid="start_main_landing"
      type="button"
      onClick={openJoosumApp}
      className={clsx(
        'text-primary-500 cursor-pointer rounded-xl bg-white font-bold transition-colors hover:bg-neutral-50',
        'px-4 py-2 text-base',
        'md:px-5 md:py-4 md:text-lg',
        'lg:flex lg:h-19.5 lg:w-62.5 lg:items-center lg:justify-center lg:px-12 lg:py-6 lg:text-[28px]',
      )}
    >
      주섬 시작하기
    </button>
  );
}
