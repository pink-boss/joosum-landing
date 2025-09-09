'use client';

// import { sendGTMEvent } from '@next/third-parties/google';

import { useState } from 'react';

import clsx from 'clsx';

import { usageData } from './constants';
import UsageContent from './UsageContent';
import { UsageNavigationButton } from './UsageNavigation';
import UsageTagButton from './UsageTagButton';

export default function UsageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? usageData.length - 1 : prev - 1));
    // sendGTMEvent({ event: 'click.usageDirection_main_landing' });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === usageData.length - 1 ? 0 : prev + 1));
    // sendGTMEvent({ event: 'click.usageDirection_main_landing' });
  };

  const handleTagClick = (index: number) => {
    setCurrentIndex(index);
    // sendGTMEvent({ event: 'click.usageTab_main_landing' });
  };

  const currentData = usageData[currentIndex];

  return (
    <section
      className={clsx(
        'w-full bg-white',
        'px-5 py-16',
        'md:px-8 md:py-20',
        'lg:px-20 lg:py-24',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={clsx('text-center', 'mb-8', 'md:mb-6', 'lg: text-left')}
        >
          <div
            className={clsx(
              'flex items-center justify-center',
              'flex-col',
              'md:flex-row md:gap-4',
              'lg:justify-start lg:gap-3',
            )}
          >
            <h3
              className={clsx(
                'text-black',
                'text-xl font-medium',
                'md:text-4xl md:font-bold',
                'lg:text-[36px] lg:leading-10',
              )}
            >
              한 눈에 살펴보는
            </h3>
            <h2
              className={clsx(
                'text-primary-500 font-bold',
                'text-3xl leading-8',
                'md:text-4xl',
                'lg:text-[36px] lg:leading-10',
              )}
            >
              주섬 사용법
            </h2>
          </div>
        </div>
        {/* 태그 버튼들 */}
        <div
          className={clsx(
            'flex flex-wrap justify-center',
            'mx-auto mb-8 max-w-[360px] gap-3',
            'md:mx-auto md:mb-6 md:max-w-[500px] md:gap-4',
            'lg:max-w-full lg:justify-start lg:gap-6',
          )}
        >
          {usageData.map((item, index) => (
            <UsageTagButton
              key={item.tag}
              isActive={currentIndex === index}
              tag={item.tag}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </div>
      </div>
      {/* 사용법 콘텐츠 */}
      <div className={clsx('mx-auto max-w-7xl', 'mt-8', 'md:mt-16', 'lg:mt-8')}>
        <div className="flex items-center justify-center lg:justify-between">
          <UsageNavigationButton
            direction="previous"
            onClick={handlePrevious}
          />
          <div className={clsx('flex-none', 'mx-4', 'md:mx-6', 'lg:mx-8')}>
            <UsageContent data={currentData} />
          </div>
          <UsageNavigationButton direction="next" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
}
