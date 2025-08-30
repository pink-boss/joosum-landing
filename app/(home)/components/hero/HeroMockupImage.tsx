import Image from 'next/image';

import clsx from 'clsx';

export default function HeroMockupImage() {
  return (
    <div
      className={clsx('flex justify-center', 'lg:flex-shrink-0 lg:justify-end')}
    >
      <div
        style={{ overflow: 'hidden' }}
        className={clsx(
          'relative flex items-center justify-center rounded-2xl',
          'h-[444.76px] w-[218.1px]',
          'md:h-[433.2px] md:w-[570px]',
          'lg:h-[343px] lg:w-[658px] lg:items-start lg:rounded-b-none',
        )}
      >
        <Image
          alt="주섬 서비스 화면 미리보기"
          className="hidden lg:block"
          height={396.99}
          src="/images/hero/hero-pc.png"
          width={658}
        />
        <Image
          alt="주섬 서비스 화면 미리보기"
          className="hidden md:block lg:hidden"
          height={433.2}
          src="/images/hero/hero-ipad.png"
          width={570}
        />
        <Image
          alt="주섬 서비스 화면 미리보기"
          className="block md:hidden"
          height={444.76}
          src="/images/hero/hero-iphone.png"
          width={218.1}
        />
      </div>
    </div>
  );
}
