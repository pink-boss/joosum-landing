"use client";

import { useState } from "react";

// 각 태그별 콘텐츠 데이터
const usageData = [
  {
    tag: "쉬운저장",
    title: {
      mobile: "모바일에서 저장하고\nPC에서 확인하세요",
      tablet: "나중에 보고 싶을 땐,\n웹에서 간편하게 저장하세요!",
      desktop: "나중에 보고 싶을 땐,\n웹에서 간편하게 저장하세요!",
    },
    description: {
      mobile:
        "어느 기기에서나 편하게 확인해보세요!\n스마트폰, 태블릿, PC에서 저장해뒀던 콘텐츠를 다시 열어볼 수 있어요",
      tablet: "공유하기를 통해 바로 내보내고\n제목이나 폴더 변경은 옵션이에요.",
      desktop:
        "공유하기를 통해 바로 내보내고\n제목이나 폴더 변경은 옵션이에요.",
    },
    image: "링크 저장 공유 패널 이미지",
  },
  {
    tag: "어디서든 확인",
    title: {
      mobile: "언제 어디서든\n저장한 콘텐츠 확인",
      tablet: "스마트폰, 태블릿, PC\n어디서든 동일한 경험",
      desktop: "스마트폰, 태블릿, PC\n어디서든 동일한 경험",
    },
    description: {
      mobile:
        "집에서는 PC로, 이동 중에는 스마트폰으로\n언제든 저장한 콘텐츠를 확인할 수 있어요",
      tablet: "모든 기기에서 동기화되어\n어디서든 같은 콘텐츠를 볼 수 있어요.",
      desktop: "모든 기기에서 동기화되어\n어디서든 같은 콘텐츠를 볼 수 있어요.",
    },
    image: "멀티 디바이스 동기화 이미지",
  },
  {
    tag: "나만의 폴더",
    title: {
      mobile: "관심사별로\n폴더를 만들어 정리",
      tablet: "카테고리별 폴더로\n체계적인 콘텐츠 관리",
      desktop: "카테고리별 폴더로\n체계적인 콘텐츠 관리",
    },
    description: {
      mobile: "업무, 취미, 공부 등\n원하는 대로 폴더를 만들어 정리하세요",
      tablet: "폴더별로 콘텐츠를 분류하여\n필요할 때 빠르게 찾을 수 있어요.",
      desktop: "폴더별로 콘텐츠를 분류하여\n필요할 때 빠르게 찾을 수 있어요.",
    },
    image: "폴더 관리 시스템 이미지",
  },
  {
    tag: "태그로 구분",
    title: {
      mobile: "태그를 활용한\n스마트한 분류",
      tablet: "태그 시스템으로\n더욱 세밀한 분류 가능",
      desktop: "태그 시스템으로\n더욱 세밀한 분류 가능",
    },
    description: {
      mobile: "여러 태그를 붙여서\n다양한 방식으로 콘텐츠를 찾아보세요",
      tablet:
        "하나의 콘텐츠에 여러 태그를 붙여\n검색과 분류가 더욱 편리해져요.",
      desktop:
        "하나의 콘텐츠에 여러 태그를 붙여\n검색과 분류가 더욱 편리해져요.",
    },
    image: "태그 시스템 이미지",
  },
  {
    tag: "잊지않게 알림",
    title: {
      mobile: "중요한 콘텐츠\n알림으로 리마인드",
      tablet: "설정한 시간에\n알림으로 다시 확인",
      desktop: "설정한 시간에\n알림으로 다시 확인",
    },
    description: {
      mobile: "나중에 꼭 봐야 할 콘텐츠는\n알림을 설정해서 놓치지 마세요",
      tablet: "원하는 시간에 알림을 받아\n중요한 콘텐츠를 놓치지 않아요.",
      desktop: "원하는 시간에 알림을 받아\n중요한 콘텐츠를 놓치지 않아요.",
    },
    image: "알림 설정 이미지",
  },
];

export default function UsageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 태그로 이동
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? usageData.length - 1 : prev - 1));
  };

  // 다음 태그로 이동
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === usageData.length - 1 ? 0 : prev + 1));
  };

  // 특정 태그 선택
  const handleTagClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentData = usageData[currentIndex];
  return (
    <div className="w-full bg-white px-5 md:px-8 xl:px-16 py-16 md:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 xl:gap-3">
            <h3 className="text-xl md:text-4xl xl:text-[36px] font-bold text-black xl:leading-10">
              한 눈에 살펴보는
            </h3>
            <h2 className="text-3xl md:text-4xl xl:text-[36px] font-bold text-primary-600 xl:leading-10">
              주섬 사용법
            </h2>
          </div>
        </div>

        {/* 태그 버튼들 */}
        <div className="flex flex-wrap gap-3 md:gap-4 xl:gap-6 justify-center mb-8 md:mb-12 xl:mb-0">
          {usageData.map((item, index) => (
            <button
              key={item.tag}
              onClick={() => handleTagClick(index)}
              className={`px-4 py-2 md:px-6 md:py-3 xl:px-5 xl:py-3 rounded-full text-base md:text-lg xl:text-[24px] font-bold transition-colors ${
                currentIndex === index
                  ? "bg-primary-600 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {item.tag}
            </button>
          ))}
        </div>
      </div>

      {/* 기기 연동 설명 */}
      <div className="mt-12 md:mt-16 xl:mt-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            className="w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 bg-neutral-300 hover:bg-neutral-400 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-neutral-600 text-lg md:text-xl xl:text-xl">
              ←
            </span>
          </button>

          <div className="flex-1 mx-4 md:mx-6 xl:mx-8">
            <div className="bg-neutral-100 rounded-3xl p-6 md:p-8 xl:p-12">
              <div className="text-center mb-6 md:mb-8 xl:mb-10">
                <h4 className="text-primary-700 text-xl md:text-2xl xl:text-[32px] font-bold mb-3 md:mb-4 xl:mb-4 xl:leading-[42px]">
                  <span className="block md:hidden">
                    {currentData.title.mobile.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index <
                          currentData.title.mobile.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </span>
                  <span className="hidden md:block xl:hidden">
                    {currentData.title.tablet.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index <
                          currentData.title.tablet.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </span>
                  <span className="hidden xl:block">
                    {currentData.title.desktop
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          {index <
                            currentData.title.desktop.split("\n").length -
                              1 && <br />}
                        </span>
                      ))}
                  </span>
                </h4>
                <p className="text-neutral-600 text-sm md:text-base xl:text-[20px] leading-relaxed xl:leading-7">
                  <span className="block md:hidden">
                    {currentData.description.mobile
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          {index <
                            currentData.description.mobile.split("\n").length -
                              1 && <br />}
                        </span>
                      ))}
                  </span>
                  <span className="hidden md:block xl:hidden">
                    {currentData.description.tablet
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          {index <
                            currentData.description.tablet.split("\n").length -
                              1 && <br />}
                        </span>
                      ))}
                  </span>
                  <span className="hidden xl:block">
                    {currentData.description.desktop
                      .split("\n")
                      .map((line, index) => (
                        <span key={index}>
                          {line}
                          {index <
                            currentData.description.desktop.split("\n").length -
                              1 && <br />}
                        </span>
                      ))}
                  </span>
                </p>
              </div>
              <div className="bg-white rounded-2xl h-64 md:h-80 xl:h-[280px] flex items-center justify-center border border-black xl:border-black">
                <span className="text-neutral-500 text-sm md:text-base xl:text-[14px] text-center xl:leading-5">
                  {currentData.image}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 xl:w-12 xl:h-12 bg-neutral-300 hover:bg-neutral-400 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-neutral-600 text-lg md:text-xl xl:text-xl">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
