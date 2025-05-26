"use client";

import { openJoosumApp } from "../../utils/deviceUtils";

export default function HeroSection() {
  return (
    <div className="w-full bg-primary-600 px-5 md:px-8 xl:px-16 py-16 md:py-20 xl:py-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center xl:text-left xl:flex xl:items-center xl:justify-between xl:gap-16">
          {/* 텍스트 섹션 */}
          <div className="mb-8 md:mb-12 xl:mb-0 xl:max-w-[445px] xl:flex-shrink-0">
            <h1 className="text-white text-2xl md:text-4xl xl:text-[40px] font-extrabold mb-2 md:mb-4 xl:mb-2 xl:leading-[48px]">
              간편한 링크 아카이빙
            </h1>
            <h2 className="text-white text-3xl md:text-5xl xl:text-[52px] font-extrabold mb-6 md:mb-8 xl:mb-10 xl:leading-[62px]">
              지금 바로 경험하세요!
            </h2>
            <button
              onClick={openJoosumApp}
              className="bg-white text-primary-600 px-6 py-3 md:px-8 md:py-4 xl:px-12 xl:py-6 rounded-xl font-bold text-base md:text-lg xl:text-[28px] xl:w-[250px] xl:h-[78px] xl:flex xl:items-center xl:justify-center hover:bg-neutral-50 transition-colors"
            >
              주섬 시작하기
            </button>
          </div>

          {/* 화면 목업 */}
          <div className="flex justify-center xl:justify-end xl:flex-shrink-0">
            <div
              className="w-40 h-80 md:w-[582px] md:h-[347px] xl:w-[512px] xl:h-[343px] bg-white rounded-2xl flex items-center justify-center"
              role="img"
              aria-label="주섬 서비스 화면 미리보기"
            >
              <span className="text-neutral-500 text-sm md:text-lg xl:text-[13.5px] text-center xl:leading-5">
                <span className="block md:hidden">모바일 화면</span>
                <span className="hidden md:block xl:hidden">
                  웹 로그인 후 화면
                  <br />
                  (폴더랑 링크 생성 수 많은,,, 가라데이터 넣은 상태)
                </span>
                <span className="hidden xl:block">
                  웹 로그인 후 화면
                  <br />
                  (폴더랑 링크 생성 수 많은,,, 가라데이터 넣은 상태)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
