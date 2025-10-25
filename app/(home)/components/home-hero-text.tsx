import { clsx } from '@/utils/clsx';

import HomeHeroButton from './home-hero-button';

export default function HomeHeroText() {
  return (
    <div className={clsx('mb-8', 'md:mb-6', 'lg:mb-0 lg:max-w-111.25 lg:flex-shrink-0')}>
      <h1
        className={clsx(
          'font-extrabold text-white',
          'text-2xl',
          'md:mb-1.5 md:text-4xl',
          'lg:mb-2 lg:text-[40px] lg:leading-[48px]',
        )}
      >
        간편한 링크 아카이빙
      </h1>
      <h2
        className={clsx(
          'mb-3 font-extrabold text-white',
          'text-[32px]',
          'md:mb-8 md:text-5xl',
          'lg:mb-10 lg:text-[52px] lg:leading-[62px]',
        )}
      >
        지금 바로 경험하세요!
      </h2>
      <HomeHeroButton />
    </div>
  );
}
