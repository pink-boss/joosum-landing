'use client';

import { useCallback, useMemo, useState } from 'react';

import { usageData } from '@/app/(home)/constants';

import { clsx } from '@/utils/clsx';

import HomeUsageContent from './home-usage-content';
import HomeUsageNavigationButton from './home-usage-navigation-button';
import HomeUsageTagButton from './home-usage-tag-button';

export default function UsageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? usageData.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === usageData.length - 1 ? 0 : prev + 1));
  }, []);

  const handleTagClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const currentData = useMemo(() => usageData[currentIndex], [currentIndex]);

  return (
    <section className={clsx('w-full bg-white', 'px-5 py-16', 'md:px-8 md:py-20', 'lg:px-20 lg:py-24')}>
      <div className="mx-auto max-w-7xl">
        <div className={clsx('text-center', 'mb-8', 'md:mb-6', 'lg: text-left')}>
          <div
            className={clsx(
              'flex items-center justify-center',
              'flex-col',
              'md:flex-row md:gap-4',
              'lg:justify-start lg:gap-3',
            )}
          >
            <h2
              className={clsx(
                'text-black',
                'text-center text-xl font-medium whitespace-pre-wrap',
                'md:text-left md:text-4xl md:font-bold md:whitespace-nowrap',
                'lg:text-[36px] lg:leading-10',
              )}
            >
              한 눈에 살펴보는{'\n'}
              <span
                className={clsx(
                  'text-primary-500 font-bold',
                  'text-3xl leading-8',
                  'md:text-4xl',
                  'lg:text-[36px] lg:leading-10',
                )}
              >
                주섬 사용법
              </span>
            </h2>
          </div>
        </div>
        {/* 태그 버튼들 */}
        <div
          className={clsx(
            'flex flex-wrap justify-center',
            'mx-auto mb-8 max-w-90 gap-3',
            'md:mx-auto md:mb-6 md:max-w-125 md:gap-4',
            'lg:max-w-full lg:justify-start lg:gap-6',
          )}
        >
          {usageData.map((item, index) => (
            <HomeUsageTagButton
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
          <HomeUsageNavigationButton direction="previous" onClick={handlePrevious} />
          <div className={clsx('flex-none', 'mx-4', 'md:mx-6', 'lg:mx-8')}>
            <HomeUsageContent data={currentData} />
          </div>
          <HomeUsageNavigationButton direction="next" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
}
