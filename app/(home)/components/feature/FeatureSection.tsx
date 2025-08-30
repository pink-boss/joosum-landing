import clsx from 'clsx';

import FeatureTag from './FeatureTag';

export default function FeatureSection() {
  return (
    <section
      className={clsx(
        'bg-primary-50 w-full',
        'px-8 py-16',
        'md:px-20 md:py-20',
        'lg:py-24',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={clsx(
            'text-left',
            'mb-8',
            'md:mb-12',
            'lg:mb-16 lg:flex lg:items-start lg:justify-start lg:gap-20',
          )}
        >
          <h2
            className={clsx(
              'text-primary-500 leading-tight font-bold',
              'mb-8 text-3xl',
              'md:mb-12 md:text-4xl',
              'lg:mb-0 lg:max-w-[266px] lg:text-[36px] lg:leading-[42px]',
            )}
          >
            <span className="block">
              흩어진 정보들 모두
              <br />한 곳에서 봐요
            </span>
          </h2>
          {/* 피처 태그들 */}
          <div
            className={clsx(
              'flex max-w-sm flex-wrap',
              'gap-3 justify-self-end',
              'md:max-w-[450px] md:gap-4',
              'lg:mx-0 lg:max-w-[574px] lg:gap-6',
            )}
          >
            <FeatureTag>🍜 오사카 맛집</FeatureTag>
            <FeatureTag>👟 홈트 영상</FeatureTag>
            <FeatureTag>🎨 디자인 레퍼런스</FeatureTag>
            <FeatureTag>💰 재테크 공부</FeatureTag>
            <FeatureTag>📷 Vlog 카메라</FeatureTag>
            <FeatureTag>✏️ 토익 학습자료</FeatureTag>
          </div>
        </div>
      </div>
    </section>
  );
}
