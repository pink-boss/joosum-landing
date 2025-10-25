import { clsx } from '@/utils/clsx';

import HomeFeatureTag from './home-feature-tag';

export default function HomeFeatureSection() {
  return (
    <section className={clsx('bg-primary-50 w-full', 'px-8 py-16', 'md:px-20 md:py-20', 'lg:py-24')}>
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
              'lg:mb-0 lg:max-w-66.5 lg:text-[36px] lg:leading-[42px]',
            )}
          >
            <div className="block md:hidden">
              <span className="text-xl font-medium text-black">
                흩어진 정보들 모두
                <br />
              </span>
              한 곳에서 봐요
            </div>
            <span className="hidden md:block">
              흩어진 정보들 모두
              <br />한 곳에서 봐요
            </span>
          </h2>
          {/* 피처 태그들 */}
          <div
            className={clsx(
              'mr-auto flex max-w-sm flex-wrap',
              'gap-3 justify-self-end',
              'md:max-w-112.5 md:gap-4',
              'lg:mx-0 lg:max-w-143.5 lg:gap-6',
            )}
          >
            <HomeFeatureTag>🍜 오사카 맛집</HomeFeatureTag>
            <HomeFeatureTag>👟 홈트 영상</HomeFeatureTag>
            <HomeFeatureTag>🎨 디자인 레퍼런스</HomeFeatureTag>
            <HomeFeatureTag>💰 재테크 공부</HomeFeatureTag>
            <HomeFeatureTag>📷 Vlog 카메라</HomeFeatureTag>
            <HomeFeatureTag>✏️ 토익 학습자료</HomeFeatureTag>
          </div>
        </div>
      </div>
    </section>
  );
}
