export default function FolderSection() {
  return (
    <div className="w-full bg-primary-50 px-5 md:px-8 xl:px-16 py-16 md:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center xl:text-left xl:flex xl:items-start xl:justify-between mb-8 md:mb-12 xl:mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-[36px] font-bold text-primary-600 leading-tight xl:leading-[42px] xl:max-w-[266px] mb-8 md:mb-12 xl:mb-0">
            <span className="block md:hidden">
              흩어진 정보들 모두
              <br />한 곳에서 봐요
            </span>
            <span className="hidden md:block xl:hidden">
              흩어진 정보들 모두 한 곳에서 봐요
            </span>
            <span className="hidden xl:block">
              흩어진 정보들 모두
              <br />한 곳에서 봐요
            </span>
          </h2>

          {/* 폴더 태그들 */}
          <div className="flex flex-wrap gap-3 md:gap-4 xl:gap-6 justify-center xl:justify-start max-w-sm md:max-w-2xl xl:max-w-[774px] mx-auto xl:mx-0">
            <span className="bg-white text-neutral-600 px-4 py-3 md:px-6 md:py-4 xl:px-7 xl:py-6 rounded-full text-base md:text-lg xl:text-[28px] font-bold xl:leading-[33px]">
              🍜 오사카 맛집
            </span>
            <span className="bg-white text-neutral-600 px-4 py-3 md:px-6 md:py-4 xl:px-7 xl:py-6 rounded-full text-base md:text-lg xl:text-[28px] font-bold xl:leading-[33px]">
              👟 홈트 영상
            </span>
            <span className="bg-white text-neutral-600 px-4 py-3 md:px-6 md:py-4 xl:px-7 xl:py-6 rounded-full text-base md:text-lg xl:text-[28px] font-bold xl:leading-[33px]">
              🎨 디자인 레퍼런스
            </span>
            <span className="bg-white text-neutral-600 px-4 py-3 md:px-6 md:py-4 xl:px-7 xl:py-6 rounded-full text-base md:text-lg xl:text-[28px] font-bold xl:leading-[33px]">
              💰 재테크 공부
            </span>
            <span className="bg-white text-neutral-600 px-4 py-3 md:px-6 md:py-4 xl:px-7 xl:py-6 rounded-full text-base md:text-lg xl:text-[28px] font-bold xl:leading-[33px]">
              📷 Vlog 카메라
            </span>
            <span className="bg-white text-neutral-600 px-4 py-3 md:px-6 md:py-4 xl:px-7 xl:py-6 rounded-full text-base md:text-lg xl:text-[28px] font-bold xl:leading-[33px]">
              ✏️ 토익 학습자료
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
