'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useCallback, useEffect, useState } from 'react';

import { Dialog } from 'radix-ui';

import { AppDownloadModal } from '@/components/modal';

import { clsx } from '@/utils/clsx';
import { openJoosumApp } from '@/utils/device-utils';

export default function Gnb() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleStart = useCallback(() => {
    openJoosumApp();
  }, []);

  const handleMobileStart = useCallback(() => {
    setIsMenuOpen(false);
    openJoosumApp();
  }, []);

  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
      <header
        data-testid="gnb_landing"
        className={clsx(
          'relative z-50 h-fit w-full border-b border-neutral-100 bg-white',
          'px-5 pt-2 pb-1.75',
          'md:px-8 md:pt-3 md:pb-2.75',
          'lg:px-20 lg:pt-5 lg:pb-4.75',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            className="flex h-7.75 items-center gap-2 transition-opacity hover:opacity-80 md:h-8.5 lg:h-10.5"
            data-testid="logo_gnb_landing"
            href="/"
          >
            <div className="relative h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8">
              <Image
                fill
                alt="Joosum Logo"
                className="object-contain"
                sizes="(max-width: 821px) 24px, (max-width: 1239px) 28px, 32px"
                src="/images/gnb-logo-icon.png"
              />
            </div>
            <div className="relative h-[31px] w-[88px] lg:h-[41px] lg:w-[118px]">
              <Image
                fill
                alt="Joosum"
                className="object-contain"
                sizes="(max-width: 1239px) 88px, 118px"
                src="/images/gnb-logo-text.png"
              />
            </div>
          </Link>
          {/* 태블릿/PC에서는 메뉴 버튼들 */}
          <div className={clsx('hidden items-center', 'md:flex md:gap-4')}>
            <Link
              data-testid="contact_gnb_landing"
              href="/contact"
              className={clsx(
                'hover:text-neutral-550 cursor-pointer text-neutral-600 transition-colors',
                'text-base',
                'lg:text-lg',
              )}
            >
              <div className="w-[72px]">문의하기</div>
            </Link>
            <Dialog.Trigger asChild>
              <button
                data-testid="download_gnb_landing"
                type="button"
                className={clsx(
                  'bg-primary-400 hover:bg-primary-500 cursor-pointer rounded-lg font-semibold text-white transition-colors',
                  'px-4 py-2 text-base',
                  'lg:px-5 lg:py-2.5 lg:text-lg',
                )}
              >
                앱 다운로드
              </button>
            </Dialog.Trigger>
            <button
              data-testid="start_gnb_landing"
              type="button"
              onClick={handleStart}
              className={clsx(
                'bg-primary-500 hover:bg-primary-700 cursor-pointer rounded-lg font-semibold text-white transition-colors',
                'px-5 py-2 text-base',
                'lg:px-6 lg:py-2.5 lg:text-lg',
              )}
            >
              주섬 시작하기
            </button>
          </div>
          {/* 모바일에서는 햄버거/X 메뉴 */}
          <button
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            type="button"
            onClick={handleMenuToggle}
            className={clsx(
              'relative z-50 flex cursor-pointer flex-col items-center justify-center transition-all duration-300 hover:opacity-80',
              'size-6 px-0.75 py-1.5',
              'md:hidden',
            )}
          >
            <div
              className={clsx(
                'h-0.5 w-4.5 transition-all duration-300 ease-in-out',
                isMenuOpen
                  ? 'h-[2.4px] w-[22.63px] translate-y-0.5 rotate-45 bg-neutral-500'
                  : '-translate-y-0.75 bg-neutral-800',
              )}
            />
            <div
              className={clsx(
                'h-0.5 w-4.5 transition-all duration-300 ease-in-out',
                isMenuOpen ? 'bg-neutral-500 opacity-0' : 'bg-neutral-800 opacity-100',
              )}
            />
            <div
              className={clsx(
                'h-0.5 w-4.5 transition-all duration-300 ease-in-out',
                isMenuOpen
                  ? 'h-[2.4px] w-[22.63px] -translate-y-0.5 -rotate-45 bg-neutral-500'
                  : 'translate-y-0.75 bg-neutral-800',
              )}
            />
          </button>
        </div>
        {/* 모바일 드롭다운 메뉴 */}
        <div
          id="mobile-menu"
          className={clsx(
            'fixed top-0 left-0 z-40 h-screen w-full transform bg-white transition-transform duration-300 ease-in-out',
            'md:hidden',
            isMenuOpen ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <div className="px-5 pt-22">
            <div
              className={clsx(
                'flex flex-col items-center gap-12 py-16 transition-all duration-300 ease-in-out',
                isMenuOpen ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-4 opacity-0',
              )}
            >
              <Link
                className="text-text-80 hover:text-primary-400 cursor-pointer text-[28px] font-extrabold transition-colors"
                data-testid="contact_gnb_landing"
                href="/contact"
                onClick={handleMenuToggle}
              >
                문의하기
              </Link>
              <button
                className="text-text-80 hover:text-primary-400 cursor-pointer text-[28px] font-extrabold transition-colors"
                data-testid="start_gnb_landing"
                type="button"
                onClick={handleMobileStart}
              >
                주섬 시작하기
              </button>
              <Dialog.Trigger asChild>
                <button
                  className="text-text-80 hover:text-primary-400 cursor-pointer text-[28px] font-extrabold transition-colors"
                  data-testid="download_gnb_landing"
                  type="button"
                  onClick={handleOpen}
                >
                  앱 다운로드
                </button>
              </Dialog.Trigger>
            </div>
          </div>
        </div>
      </header>
      {/* 앱 다운로드 모달 */}
      <AppDownloadModal />
    </Dialog.Root>
  );
}
