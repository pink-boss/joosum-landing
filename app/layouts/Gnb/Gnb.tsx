'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { openJoosumApp } from '@/utils/deviceUtils';
import clsx from 'clsx';

// 모달을 동적 임포트로 최적화
const AppDownloadModal = dynamic(
  () => import('@/components/Modal/AppDownloadModal'),
  {
    ssr: false,
    loading: () => null,
  },
);

export default function Gnb() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickLogo = () => {
    sendGTMEvent({ event: 'click.logo_gnb_landing' });
  };

  const handleClickStart = () => {
    openJoosumApp();
    sendGTMEvent({ event: 'click.start_gnb_landing' });
  };

  const handleAppDownloadGNB = () => {
    sendGTMEvent({ event: 'click.download_gnb_landing' });
  };
  const handleClickContact = () => {
    sendGTMEvent({ event: 'click.contact_gnb_landing' });
  };

  const openModal = () => {
    setIsModalOpen(true);
    handleAppDownloadGNB();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header
        className={clsx(
          'relative z-50 h-fit w-full border-b border-neutral-100 bg-white',
          'px-5 py-2',
          'md:px-8 md:py-3',
          'lg:px-20 lg:py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
            href="/"
            onClick={handleClickLogo}
          >
            <>
              <Image
                alt="logo"
                className="md:hidden"
                height={24}
                src="/images/header-logo.png"
                width={24}
              />
              <Image
                alt="logo"
                className="hidden md:block lg:hidden"
                height={28}
                src="/images/header-logo@2x.png"
                width={28}
              />
              <Image
                alt="logo"
                className="hidden lg:block"
                height={24}
                src="/images/header-logo.png"
                width={24}
              />
            </>
            <span
              className={clsx(
                'text-primary-500 font-bold',
                'text-xl',
                'md:text-2xl',
                'lg:text-[32px]',
              )}
            >
              Joosum
            </span>
          </Link>

          {/* 모바일에서는 햄버거/X 메뉴 */}
          <button
            onClick={toggleMenu}
            className={clsx(
              'relative z-50 flex cursor-pointer flex-col items-center justify-center transition-all duration-300 hover:opacity-80',
              isMenuOpen ? 'size-10 p-2' : 'size-6 px-[3px] py-1.5',
              'md:hidden',
            )}
          >
            <div
              className={clsx(
                'h-0.5 w-5 transition-all duration-300 ease-in-out',
                isMenuOpen
                  ? 'translate-y-0.5 rotate-45 bg-neutral-500'
                  : '-translate-y-1.5 bg-neutral-800',
              )}
            ></div>
            <div
              className={clsx(
                'h-0.5 w-5 transition-all duration-300 ease-in-out',
                isMenuOpen
                  ? 'bg-neutral-500 opacity-0'
                  : 'bg-neutral-800 opacity-100',
              )}
            ></div>
            <div
              className={clsx(
                'h-0.5 w-5 transition-all duration-300 ease-in-out',
                isMenuOpen
                  ? '-translate-y-0.5 -rotate-45 bg-neutral-500'
                  : 'translate-y-1.5 bg-neutral-800',
              )}
            ></div>
          </button>

          {/* 태블릿/PC에서는 메뉴 버튼들 */}
          <div className={clsx('hidden items-center', 'md:flex md:gap-4')}>
            <Link
              href="/contact"
              onClick={handleClickContact}
              className={clsx(
                'hover:text-neutral-550 cursor-pointer text-neutral-600 transition-colors',
                'text-base',
                'lg:text-lg',
              )}
            >
              <div className="w-[72px]">문의하기</div>
            </Link>
            <button
              onClick={openModal}
              className={clsx(
                'bg-primary-400 hover:bg-primary-500 cursor-pointer rounded-lg font-semibold text-white transition-colors',
                'px-4 py-2 text-base',
                'lg:px-5 lg:py-2.5 lg:text-lg',
              )}
            >
              앱 다운로드
            </button>
            <button
              onClick={handleClickStart}
              className={clsx(
                'bg-primary-500 hover:bg-primary-700 cursor-pointer rounded-lg font-semibold text-white transition-colors',
                'px-5 py-2 text-base',
                'lg:px-6 lg:py-2.5 lg:text-lg',
              )}
            >
              주섬 시작하기
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        <div
          className={clsx(
            'fixed top-0 left-0 z-40 h-screen w-full transform bg-white transition-transform duration-300 ease-in-out',
            'md:hidden',
            isMenuOpen ? 'translate-y-0' : '-translate-y-full',
          )}
        >
          <div className="px-5 pt-[88px]">
            <div
              className={clsx(
                'flex flex-col items-center gap-12 py-16 transition-all duration-300 ease-in-out',
                isMenuOpen
                  ? 'translate-y-0 opacity-100 delay-150'
                  : 'translate-y-4 opacity-0',
              )}
            >
              <Link
                className="text-text-80 hover:text-primary-400 cursor-pointer text-[28px] font-extrabold transition-colors"
                href="/contact"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleClickContact();
                }}
              >
                문의하기
              </Link>
              <button
                className="text-text-80 hover:text-primary-400 cursor-pointer text-[28px] font-extrabold transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  handleClickStart();
                }}
              >
                주섬 시작하기
              </button>
              <button
                className="text-text-80 hover:text-primary-400 cursor-pointer text-[28px] font-extrabold transition-colors"
                onClick={() => {
                  setIsMenuOpen(false);
                  openModal();
                }}
              >
                앱 다운로드
              </button>
            </div>
          </div>
        </div>

        {/* 앱 다운로드 모달 */}
        <AppDownloadModal isOpen={isModalOpen} onClose={closeModal} />
      </header>
    </>
  );
}
