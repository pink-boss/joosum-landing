"use client";

import { useState } from "react";
import Link from "next/link";
import { openJoosumApp } from "../../utils/deviceUtils";
import dynamic from "next/dynamic";

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
      <div className="w-full h-12 md:h-14 xl:h-[82px] bg-white flex items-center justify-between px-5 md:px-8 xl:px-16 border-b border-neutral-100 relative z-50">
        <Link
          href="/"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 md:w-7 md:h-7 xl:w-8 xl:h-8 bg-primary-600 rounded"></div>
          <span className="text-xl md:text-2xl xl:text-[32px] font-bold text-primary-600">
            Joosum
          </span>
        </Link>

        {/* 모바일에서는 햄버거/X 메뉴 */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center relative z-50"
        >
          <div
            className={`w-5 h-0.5 bg-neutral-800 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 bg-neutral-800 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-5 h-0.5 bg-neutral-800 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"
            }`}
          ></div>
        </button>

        {/* 태블릿/PC에서는 메뉴 버튼들 */}
        <div className="hidden md:flex items-center gap-3 xl:gap-4">
          <Link
            href="/contact"
            className="text-neutral-600 text-base xl:text-lg hover:text-primary-600 transition-colors"
          >
            문의하기
          </Link>
          <button
            onClick={openModal}
            className="bg-primary-500 text-white px-4 py-2 xl:px-5 xl:py-2.5 rounded-lg text-base xl:text-lg font-semibold hover:bg-primary-600 transition-colors"
          >
            앱 다운로드
          </button>
          <button
            onClick={openJoosumApp}
            className="bg-primary-600 text-white px-5 py-2 xl:px-6 xl:py-2.5 rounded-lg text-base xl:text-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            주섬 시작하기
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-[88px] px-5">
          <div
            className={`flex flex-col items-center gap-12 py-16 transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0 delay-150"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-primary-600 text-[28px] font-extrabold hover:text-primary-700 transition-colors"
            >
              문의하기
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                openJoosumApp();
              }}
              className="text-neutral-600 text-[28px] font-extrabold hover:text-primary-600 transition-colors"
            >
              주섬 시작하기
            </button>
            <button
              onClick={openModal}
              className="text-neutral-600 text-[28px] font-extrabold hover:text-primary-600 transition-colors"
            >
              앱 다운로드
            </button>
          </div>
        </div>
      </div>

      {/* 앱 다운로드 모달 */}
      <AppDownloadModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
