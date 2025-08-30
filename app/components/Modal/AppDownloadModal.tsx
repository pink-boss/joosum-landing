'use client';

import { useEffect } from 'react';

import { QRCodeDownloadButton, QRCodeList } from '@/components/QRCode';

import clsx from 'clsx';

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDownloadModal({
  isOpen,
  onClose,
}: AppDownloadModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={clsx('fixed inset-0 z-50 flex items-center justify-center')}
    >
      <div
        className={clsx('absolute inset-0 bg-black opacity-[0.5]')}
        onClick={onClose}
      />
      <div
        className={clsx(
          'animate-in fade-in-0 zoom-in-95 relative rounded-2xl bg-white duration-200',
          'mx-4 w-[319px]',
          'md:w-[653px]',
        )}
      >
        <div className={clsx('flex h-full flex-col gap-7', 'p-5', 'md:p-10')}>
          <div className={clsx('text-center', 'mb-4', 'md:mb-1')}>
            <h2
              className={clsx(
                'text-black',
                'text-lg font-semibold',
                'md:text-2xl md:font-bold',
              )}
            >
              주섬 앱 다운로드
            </h2>
            <p
              className={clsx(
                'text-neutral-800',
                'text-sm leading-[22px]',
                'md:text-base md:leading-[19px]',
              )}
            >
              <span className="md:hidden">
                버튼을 누르면
                <br />앱 설치화면으로 이동합니다.
              </span>
              <span className="hidden md:block">
                QR코드를 스캔하면 앱 설치화면으로 이동합니다.
              </span>
            </p>
          </div>
          <QRCodeDownloadButton isModal />
          <QRCodeList />
          <div className={clsx('text-center')}>
            <p
              className={clsx(
                'text-neutral-800',
                'text-sm leading-[22px]',
                'md:text-base md:leading-[19px]',
              )}
            >
              주섬 앱 다운로드 받고,
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>
              어디서든 내가 저장해둔 <span className="hidden md:block"></span>
              <span className="hidden md:inline"> </span>
              컨텐츠를 열어보세요!
            </p>
          </div>
          <button
            onClick={onClose}
            className={clsx(
              'w-full cursor-pointer py-4',
              'rounded-lg text-base font-bold text-white',
              'bg-neutral-500 transition-opacity hover:opacity-80',
            )}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
