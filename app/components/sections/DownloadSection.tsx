export default function DownloadSection() {
  return (
    <div className="w-full bg-primary-50 px-5 md:px-8 xl:px-16 py-16 md:py-20 xl:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center xl:text-left mb-8 md:mb-12 xl:mb-16">
          <h2 className="text-2xl md:text-4xl xl:text-[42px] font-bold text-primary-600 mb-4 md:mb-6 xl:mb-2 xl:leading-[50px]">
            어디서든 링크를 저장하고 확인해보세요.
          </h2>
          <p className="text-neutral-800 text-base md:text-lg xl:text-[24px] leading-relaxed xl:leading-[29px]">
            PC, 태블릿, 모바일 기기 등 하나의 계정으로 연동해서 링크를
            관리해보세요.
          </p>
        </div>

        {/* 다운로드 섹션 */}
        <div className="flex flex-col md:flex-row items-center justify-center xl:justify-end gap-6 md:gap-8 xl:gap-6">
          {/* 모바일에서는 버튼만 */}
          <div className="flex gap-4 md:hidden">
            <div className="w-36 h-12 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">App Store</span>
            </div>
            <div className="w-36 h-12 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">Google Play</span>
            </div>
          </div>

          {/* 태블릿/PC에서는 목업 이미지와 QR코드들 */}
          <div className="hidden md:flex items-center gap-6 xl:gap-6">
            {/* 목업 이미지 */}
            <div className="bg-white rounded-2xl p-6 xl:p-12 w-[284px] xl:w-[468px] h-[171px] xl:h-[468px] flex flex-col items-center justify-center">
              <div className="text-center">
                <span className="text-neutral-800 text-xs xl:text-[24px] font-bold block mb-2 xl:mb-4">
                  목업이미지
                </span>
                <span className="text-neutral-800 text-xs xl:text-[20px] leading-relaxed xl:leading-7">
                  최소 투자금액 입금 이후에는 금액 제한 없이 자유롭게 추가 납입
                  하실 수 있습니다
                </span>
              </div>
            </div>

            {/* QR코드들 */}
            <div className="flex gap-4 xl:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-[124px] h-[124px] xl:w-[124px] xl:h-[124px] bg-neutral-300 rounded-xl mb-2 xl:mb-2"></div>
                <div className="w-[124px] h-[39px] xl:w-[124px] xl:h-[39px] bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs xl:text-xs">
                    App Store
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-[124px] h-[124px] xl:w-[124px] xl:h-[124px] bg-neutral-300 rounded-xl mb-2 xl:mb-2"></div>
                <div className="w-[124px] h-[39px] xl:w-[124px] xl:h-[39px] bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs xl:text-xs">
                    Google Play
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
