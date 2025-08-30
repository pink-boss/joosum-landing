import { QRCodeDownloadButton, QRCodeList } from '@/components/QRCode';

import clsx from 'clsx';

import DownloadMockupImage from './DownloadMockupImage';

export default function DownloadSection() {
  return (
    <section
      className={clsx(
        'bg-primary-50 w-full',
        'px-6 py-16',
        'md:p-20',
        'lg:px-20 lg:pt-20 lg:pb-px',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className={clsx('lg:flex lg:justify-between')}>
          <div className={clsx('mb-0', 'lg:mb-16')}>
            <h2
              className={clsx(
                'text-primary-500 font-bold',
                'mb-1 text-2xl',
                'md:text-4xl',
                'lg:mb-2 lg:text-[42px] lg:leading-[50px]',
              )}
            >
              <span className="md:hidden">
                <p>어디서든 링크를 저장하고</p>
                <p>확인해보세요.</p>
              </span>
              <span className="hidden md:block">
                어디서든 링크를 저장하고 확인해보세요.
              </span>
            </h2>
            <span
              className={clsx(
                'leading-relaxed text-neutral-800',
                'text-base',
                'md:text-xl',
                'lg:text-2xl lg:leading-[29px]',
              )}
            >
              <span className="md:hidden">
                <p>PC, 태블릿, 모바일 기기 등 하나의 계정으로</p>
                <p>연동해서 링크를 관리해보세요.</p>
              </span>
              <span className="hidden md:block">
                PC, 태블릿, 모바일 기기 등 하나의 계정으로 연동해서 링크를
                관리해보세요.
              </span>
            </span>
          </div>
          <div className="hidden lg:block">
            <QRCodeList />
          </div>
        </div>
        {/* 다운로드 섹션 */}
        <div
          className={clsx(
            'flex items-center',
            'mt-7 flex-col justify-center gap-6',
            'md:flex-row md:justify-center md:gap-8',
            'lg:mt-10 lg:flex-1 lg:justify-center lg:gap-6',
          )}
        >
          {/* 모바일에서는 버튼만 */}
          <QRCodeDownloadButton />
          {/* 태블릿/PC에서는 목업 이미지와 QR코드들 */}
          <div
            className={clsx('hidden', 'md:block', 'lg:relative lg:h-[680.9px]')}
            style={{
              overflow: 'hidden',
            }}
          >
            {/* 목업 이미지 */}
            <DownloadMockupImage />
          </div>
          <div className={clsx('hidden', 'md:block', 'lg:hidden')}>
            <QRCodeList />
          </div>
        </div>
      </div>
    </section>
  );
}
