'use client';

import { Dialog } from 'radix-ui';
import { clsx } from 'utils/clsx';

import { QRCodeDownloadButton, QRCodeList } from '@/components/qr-code';

export default function AppDownloadModal() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={clsx('fixed inset-0 z-9999 bg-black/50')} />
      <Dialog.Content
        className={clsx(
          'fixed top-1/2 left-1/2 z-10000 -translate-x-1/2 -translate-y-1/2',
          'animate-in fade-in-0 zoom-in-95 rounded-2xl bg-white duration-200',
          'mx-4 w-[319px]',
          'md:w-[653px]',
        )}
      >
        <div className={clsx('flex h-full flex-col gap-7', 'p-5', 'md:p-10')}>
          <div className={clsx('text-center', 'mb-4', 'md:mb-1')}>
            <Dialog.Title className={clsx('text-black', 'text-lg font-semibold', 'md:text-2xl md:font-bold')}>
              주섬 앱 다운로드
            </Dialog.Title>
            <Dialog.Description
              className={clsx('text-neutral-800', 'text-sm leading-[22px]', 'md:text-base md:leading-[19px]')}
            >
              <span className="md:hidden">
                버튼을 누르면
                <br />앱 설치화면으로 이동합니다.
              </span>
              <span className="hidden md:block">QR코드를 스캔하면 앱 설치화면으로 이동합니다.</span>
            </Dialog.Description>
          </div>
          <QRCodeDownloadButton isModal />
          <QRCodeList />
          <div className={clsx('text-center')}>
            <p className={clsx('text-neutral-800', 'text-sm leading-[22px]', 'md:text-base md:leading-[19px]')}>
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
          <Dialog.Close asChild>
            <button
              type="button"
              className={clsx(
                'w-full cursor-pointer py-4',
                'rounded-lg text-base font-bold text-white',
                'bg-neutral-500 transition-opacity hover:opacity-80',
              )}
            >
              닫기
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
