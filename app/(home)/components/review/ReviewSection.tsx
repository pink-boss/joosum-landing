'use client';

import { useEffect, useRef } from 'react';

import clsx from 'clsx';

import { reviewData } from './constants';
import ReviewCard from './ReviewCard';

export default function ReviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      // 세로 스크롤 이벤트인지 확인
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (e.deltaY > 0) {
          // 아래로 스크롤 (오른쪽으로 이동)
          if (scrollLeft < maxScrollLeft) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          }
        } else {
          // 위로 스크롤 (왼쪽으로 이동)
          if (scrollLeft > 0) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          }
        }
      }
    };

    section.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      section.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={clsx(
        'w-full bg-white',
        'px-6 py-12',
        'md:p-20',
        'lg:px-20 lg:py-24',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={clsx(
            'mb-8 text-center',
            'md:mb-12 md:text-start',
            'lg:mb-16 lg:text-center',
          )}
        >
          <h2
            className={clsx(
              'text-primary-500 font-bold',
              'text-3xl',
              'md:text-4xl',
              'lg:text-[36px] lg:leading-[43px]',
            )}
          >
            <div className="block md:hidden">
              <span className="text-xl font-medium text-black">
                솔직하고 생생한
                <br />
              </span>
              사용자 리뷰
            </div>
            <span className="hidden md:block">솔직하고 생생한 사용자 리뷰</span>
          </h2>
        </div>
        {/* 리뷰 카드들 */}
        <div
          ref={scrollContainerRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className={clsx(
            'scrollbar-hide flex overflow-x-auto pb-4',
            'gap-6',
            'lg:gap-8',
          )}
        >
          {reviewData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
