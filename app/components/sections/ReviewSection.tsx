"use client";

import { useEffect, useRef } from "react";

export default function ReviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      // 세로 스크롤 이벤트인지 확인
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScrollLeft =
          scrollContainer.scrollWidth - scrollContainer.clientWidth;

        if (e.deltaY > 0) {
          // 아래로 스크롤 (오른쪽으로 이동)
          if (scrollLeft < maxScrollLeft) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          }
        } else {
          // 위로 스크롤 (왼쪽으로 이동)
          if (scrollLeft > 0) {
            e.preventDefault();
            scrollContainer.scrollLeft += e.deltaY;
          }
        }
      }
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      section.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div
      ref={sectionRef}
      className="w-full bg-white px-5 md:px-8 xl:px-16 py-16 md:py-20 xl:py-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 xl:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-[36px] font-bold text-primary-600 xl:leading-[43px]">
            솔직하고 생생한 사용자 리뷰
          </h2>
        </div>

        {/* 리뷰 카드들 */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 xl:gap-8 overflow-x-auto scrollbar-hide pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 xl:p-6 flex-shrink-0 w-80 md:w-96 xl:w-[400px]">
            <h4 className="text-xl md:text-2xl xl:text-[24px] font-semibold text-neutral-800 mb-2 md:mb-3 xl:mb-3 xl:leading-[30px]">
              매번 뭐든 저장해놓고
              <br />
              3년동안 안 보던 사람
            </h4>
            <div className="text-xl md:text-2xl xl:text-[24px] text-neutral-600 mb-4 md:mb-6 xl:mb-6 xl:leading-[29px]">
              ★★★★★ 5
            </div>
            <p className="text-neutral-600 text-base md:text-lg xl:text-[16px] leading-relaxed xl:leading-5 mb-4 md:mb-6 xl:mb-6">
              매번 뭐든 저장해놓고 3년동안 안 보던 사람 .. 의 후기 이런 어플
              어디 없나 항상 생각하고 있었는데 ...! 저의 마음을 읽어버린
              개발자분들 박수드려👏 인스타에서도 항상 저장만 해두고 꺼내보기까지
              시간이 많이 걸렸었는데 이 어플 홈화면에 두니까 너무 편리하게
              꺼내먹을 수 있어서 좋아요 !! (후략)
            </p>
            <div className="text-neutral-600 text-base md:text-lg xl:text-[16px] xl:leading-5">
              토끼귀엽
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 xl:p-6 flex-shrink-0 w-80 md:w-96 xl:w-[400px]">
            <h4 className="text-xl md:text-2xl xl:text-[24px] font-semibold text-neutral-800 mb-2 md:mb-3 xl:mb-3 xl:leading-[30px]">
              TMI 수집러에게
              <br />꼭 필요했던 어플
            </h4>
            <div className="text-xl md:text-2xl xl:text-[24px] text-neutral-600 mb-4 md:mb-6 xl:mb-6 xl:leading-[29px]">
              ★★★★★ 5
            </div>
            <p className="text-neutral-600 text-base md:text-lg xl:text-[16px] leading-relaxed xl:leading-5 mb-4 md:mb-6 xl:mb-6">
              제가 기다리던 어플이 드디어 등장했네요 ㅜㅜㅜ 메모장에 링크만
              수백개인데 어디계신가요 ~~~ 개발자분 ㅜㅜㅜ
              <br />이 어플 제가 끝까지 함께할겁니다
            </p>
            <div className="text-neutral-600 text-base md:text-lg xl:text-[16px] xl:leading-5">
              만두정마니님
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 xl:p-6 flex-shrink-0 w-80 md:w-96 xl:w-[400px]">
            <h4 className="text-xl md:text-2xl xl:text-[24px] font-semibold text-neutral-800 mb-2 md:mb-3 xl:mb-3 xl:leading-[30px]">
              링크만 저장해서
              <br />
              다시 찾기 편해요!!
            </h4>
            <div className="text-xl md:text-2xl xl:text-[24px] text-neutral-600 mb-4 md:mb-6 xl:mb-6 xl:leading-[29px]">
              ★★★★★ 5
            </div>
            <p className="text-neutral-600 text-base md:text-lg xl:text-[16px] leading-relaxed xl:leading-5 mb-4 md:mb-6 xl:mb-6">
              원래 링크 저장을 기본 메모어플이나 카카오톡 자기채팅에 보내곤
              했는데 이 어플 쓰고나서부터 다시 봐야하는 링크들을 카테고리별로
              저장하기 너무 좋네요! 추천박구 가요!!
            </p>
            <div className="text-neutral-600 text-base md:text-lg xl:text-[16px] xl:leading-5">
              토끼귀엽
            </div>
          </div>

          {/* 추가 리뷰 카드들 */}
          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 xl:p-6 flex-shrink-0 w-80 md:w-96 xl:w-[400px]">
            <h4 className="text-xl md:text-2xl xl:text-[24px] font-semibold text-neutral-800 mb-2 md:mb-3 xl:mb-3 xl:leading-[30px]">
              정말 유용한
              <br />
              링크 관리 앱
            </h4>
            <div className="text-xl md:text-2xl xl:text-[24px] text-neutral-600 mb-4 md:mb-6 xl:mb-6 xl:leading-[29px]">
              ★★★★★ 5
            </div>
            <p className="text-neutral-600 text-base md:text-lg xl:text-[16px] leading-relaxed xl:leading-5 mb-4 md:mb-6 xl:mb-6">
              북마크 기능보다 훨씬 편리하고 직관적이에요. 폴더별로 정리할 수
              있어서 나중에 찾기도 쉽고, 태그 기능도 정말 유용합니다. 이런 앱을
              기다리고 있었어요!
            </p>
            <div className="text-neutral-600 text-base md:text-lg xl:text-[16px] xl:leading-5">
              링크수집가
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 xl:p-6 flex-shrink-0 w-80 md:w-96 xl:w-[400px]">
            <h4 className="text-xl md:text-2xl xl:text-[24px] font-semibold text-neutral-800 mb-2 md:mb-3 xl:mb-3 xl:leading-[30px]">
              깔끔하고
              <br />
              사용하기 편해요
            </h4>
            <div className="text-xl md:text-2xl xl:text-[24px] text-neutral-600 mb-4 md:mb-6 xl:mb-6 xl:leading-[29px]">
              ★★★★☆ 4
            </div>
            <p className="text-neutral-600 text-base md:text-lg xl:text-[16px] leading-relaxed xl:leading-5 mb-4 md:mb-6 xl:mb-6">
              UI가 깔끔하고 사용법도 간단해서 좋아요. 공유하기로 바로 저장할 수
              있는 기능이 특히 마음에 들어요. 앞으로 더 많은 기능이 추가되길
              기대합니다.
            </p>
            <div className="text-neutral-600 text-base md:text-lg xl:text-[16px] xl:leading-5">
              디지털노마드
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 xl:p-6 flex-shrink-0 w-80 md:w-96 xl:w-[400px]">
            <h4 className="text-xl md:text-2xl xl:text-[24px] font-semibold text-neutral-800 mb-2 md:mb-3 xl:mb-3 xl:leading-[30px]">
              업무용으로
              <br />
              최고예요!
            </h4>
            <div className="text-xl md:text-2xl xl:text-[24px] text-neutral-600 mb-4 md:mb-6 xl:mb-6 xl:leading-[29px]">
              ★★★★★ 5
            </div>
            <p className="text-neutral-600 text-base md:text-lg xl:text-[16px] leading-relaxed xl:leading-5 mb-4 md:mb-6 xl:mb-6">
              업무 관련 자료들을 프로젝트별로 정리해서 저장하고 있어요. 팀원들과
              공유하기도 편하고, 검색 기능도 빠르고 정확해서 업무 효율이 많이
              올랐습니다.
            </p>
            <div className="text-neutral-600 text-base md:text-lg xl:text-[16px] xl:leading-5">
              프로젝트매니저
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
