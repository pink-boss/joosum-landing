import clsx from 'clsx';

import HeroMockupImage from './HeroMockupImage';
import HeroText from './HeroText';

export default function HeroSection() {
  return (
    <section
      className={clsx(
        'bg-primary-500 relative w-full',
        'px-5 py-[60px]',
        'md:px-8 md:py-20',
        'lg:px-20 lg:pt-20 lg:pb-0',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={clsx(
            'text-center',
            'lg:flex lg:items-start lg:justify-between lg:gap-16 lg:text-left',
          )}
        >
          <HeroText />
          <HeroMockupImage />
        </div>
      </div>
    </section>
  );
}
