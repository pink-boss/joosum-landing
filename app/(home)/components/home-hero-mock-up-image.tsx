import Image from 'next/image';

import { clsx } from '@/utils/clsx';

export default function HomeHeroMockupImage() {
  return (
    <div className={clsx('flex justify-center', 'lg:flex-shrink-0 lg:justify-end')}>
      <div
        className={clsx(
          'relative flex items-center justify-center overflow-hidden rounded-2xl',
          'h-[444.76px] w-[218.1px]',
          'md:h-[433.2px] md:w-142.5',
          'lg:h-85.75 lg:w-164.5 lg:items-start lg:rounded-b-none',
        )}
      >
        <Image
          alt="주섬 서비스 화면 미리보기"
          className="hidden lg:block"
          height={396.99}
          src="/images/home-hero-pc.png"
          width={658}
        />
        <Image
          alt="주섬 서비스 화면 미리보기"
          className="hidden md:block lg:hidden"
          height={433.2}
          src="/images/home-hero-ipad.png"
          width={570}
        />
        <Image
          alt="주섬 서비스 화면 미리보기"
          className="block md:hidden"
          height={444.76}
          src="/images/home-hero-iphone.png"
          width={218.1}
        />
      </div>
    </div>
  );
}
