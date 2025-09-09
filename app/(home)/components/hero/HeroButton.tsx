'use client';

import { sendGTMEvent } from '@next/third-parties/google';

import { openJoosumApp } from '@/utils/deviceUtils';
import clsx from 'clsx';

export default function HeroButton() {
  const handleClickStart = () => {
    sendGTMEvent({ event: 'click.start_main_landing' });
  };

  return (
    <button
      data-testid="start_main_landing"
      onClick={() => {
        openJoosumApp();
        handleClickStart();
      }}
      className={clsx(
        'text-primary-500 cursor-pointer rounded-xl bg-white font-bold transition-colors hover:bg-neutral-50',
        'px-4 py-2 text-base',
        'md:px-5 md:py-4 md:text-lg',
        'lg:flex lg:h-[78px] lg:w-[250px] lg:items-center lg:justify-center lg:px-12 lg:py-6 lg:text-[28px]',
      )}
    >
      주섬 시작하기
    </button>
  );
}
