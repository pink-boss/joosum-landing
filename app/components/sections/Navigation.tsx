"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { openJoosumApp } from "../../utils/deviceUtils";
import dynamic from "next/dynamic";
import Image from "next/image";

// 모달을 동적 임포트로 최적화
const AppDownloadModal = dynamic(() => import("../AppDownloadModal"), {
  ssr: false,
  loading: () => null,
});

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsMenuOpen(false); // 모바일 메뉴가 열려있다면 닫기
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={clsx(
          "w-full bg-white border-b border-neutral-100 relative z-50 h-fit",
          "px-5 py-2",
          "md:px-8 md:py-3",
          "lg:px-20 lg:py-5"
        )}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <>
              <Image
                src="/images/header-logo.png"
                alt="logo"
                width={24}
                height={24}
                className="md:hidden"
              />
              <Image
                src="/images/header-logo@2x.png"
                alt="logo"
                width={28}
                height={28}
                className="hidden md:block lg:hidden"
              />
              <Image
                src="/images/header-logo.png"
                alt="logo"
                width={24}
                height={24}
                className="hidden lg:block"
              />
            </>
            <span
              className={clsx(
                "font-bold text-primary-500",
                "text-xl",
                "md:text-2xl",
                "lg:text-[32px]"
              )}
            >
              Joosum
            </span>
          </Link>

          {/* 모바일에서는 햄버거/X 메뉴 */}
          <button
            onClick={toggleMenu}
            className={clsx(
              "flex flex-col justify-center items-center relative z-50 cursor-pointer hover:opacity-80 transition-all duration-300",
              isMenuOpen ? "size-10 p-2" : "size-6 px-[3px] py-1.5",
              "md:hidden"
            )}
          >
            <div
              className={clsx(
                "w-5 h-0.5 transition-all duration-300 ease-in-out",
                isMenuOpen
                  ? "bg-neutral-500 rotate-45 translate-y-0.5"
                  : "-translate-y-1.5 bg-neutral-800"
              )}
            ></div>
            <div
              className={clsx(
                "w-5 h-0.5 transition-all duration-300 ease-in-out",
                isMenuOpen
                  ? "bg-neutral-500 opacity-0"
                  : "opacity-100 bg-neutral-800"
              )}
            ></div>
            <div
              className={clsx(
                "w-5 h-0.5 transition-all duration-300 ease-in-out",
                isMenuOpen
                  ? "bg-neutral-500 -rotate-45 -translate-y-0.5"
                  : "translate-y-1.5 bg-neutral-800"
              )}
            ></div>
          </button>

          {/* 태블릿/PC에서는 메뉴 버튼들 */}
          <div className={clsx("hidden items-center", "md:flex md:gap-4")}>
            <Link
              href="/contact"
              className={clsx(
                "text-neutral-600 hover:text-neutral-550 transition-colors cursor-pointer",
                "text-base",
                "lg:text-lg"
              )}
            >
              <div className="w-[72px]">문의하기</div>
            </Link>
            <button
              onClick={openModal}
              className={clsx(
                "bg-primary-400 text-white rounded-lg font-semibold hover:bg-primary-500 transition-colors cursor-pointer",
                "px-4 py-2 text-base",
                "lg:px-5 lg:py-2.5 lg:text-lg"
              )}
            >
              앱 다운로드
            </button>
            <button
              onClick={openJoosumApp}
              className={clsx(
                "bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors cursor-pointer",
                "px-5 py-2 text-base",
                "lg:px-6 lg:py-2.5 lg:text-lg"
              )}
            >
              주섬 시작하기
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        <div
          className={clsx(
            "fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out",
            "md:hidden",
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <div className="pt-[88px] px-5">
            <div
              className={clsx(
                "flex flex-col items-center gap-12 py-16 transition-all duration-300 ease-in-out",
                isMenuOpen
                  ? "opacity-100 translate-y-0 delay-150"
                  : "opacity-0 translate-y-4"
              )}
            >
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-text-80 text-[28px] font-extrabold cursor-pointer hover:text-primary-400 transition-colors"
              >
                문의하기
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openJoosumApp();
                }}
                className="text-text-80 text-[28px] font-extrabold cursor-pointer hover:text-primary-400 transition-colors"
              >
                주섬 시작하기
              </button>
              <button
                onClick={openModal}
                className="text-text-80 text-[28px] font-extrabold cursor-pointer hover:text-primary-400 transition-colors"
              >
                앱 다운로드
              </button>
            </div>
          </div>
        </div>

        {/* 앱 다운로드 모달 */}
        <AppDownloadModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
