export default function Footer() {
  return (
    <div className="w-full bg-white">
      {/* 링크 섹션 */}
      <div className="w-full border-t border-neutral-200 px-5 md:px-8 xl:px-16 py-4 md:py-5 xl:py-3">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 md:gap-8 xl:gap-8 justify-center text-sm md:text-sm xl:text-[14px]">
            <a
              href="#"
              className="text-black hover:text-primary-600 transition-colors border border-neutral-200 px-4 py-2 md:px-3 md:py-2 xl:px-3 xl:py-1 rounded"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="text-black hover:text-primary-600 transition-colors border border-neutral-200 px-4 py-2 md:px-3 md:py-2 xl:px-3 xl:py-1 rounded"
            >
              서비스 이용 약관
            </a>
            <a
              href="#"
              className="text-black hover:text-primary-600 transition-colors border border-neutral-200 px-4 py-2 md:px-3 md:py-2 xl:px-3 xl:py-1 rounded"
            >
              서비스 이용약관
            </a>
            <a
              href="#"
              className="text-black hover:text-primary-600 transition-colors border border-neutral-200 px-4 py-2 md:px-3 md:py-2 xl:px-3 xl:py-1 rounded"
            >
              이용문의
            </a>
            <a
              href="#"
              className="text-black hover:text-primary-600 transition-colors"
            >
              공지사항
            </a>
            <a
              href="#"
              className="text-black hover:text-primary-600 transition-colors"
            >
              공시
            </a>
          </div>
        </div>
      </div>

      {/* 회사 정보 */}
      <div className="w-full border-t border-neutral-200 px-5 md:px-8 xl:px-16 py-8 md:py-12 xl:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="md:flex md:justify-between md:items-start xl:items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-base md:text-base xl:text-[16px] font-semibold text-black mb-1 md:mb-2 xl:mb-1">
                Pinkboss
              </h4>
              <p className="text-sm md:text-xs xl:text-[16px] text-neutral-500">
                Copyright ⓒ 2022, Pinkboss. All rights reserved.
              </p>
            </div>

            <div className="mb-4 md:mb-0 md:flex-1 md:text-center xl:text-right xl:flex-none">
              <div className="flex items-center justify-center xl:justify-end gap-2 xl:mb-2">
                <span className="text-base md:text-base xl:text-[16px] font-semibold text-black">
                  Contact:
                </span>
                <span className="text-base md:text-base xl:text-[16px] text-neutral-600">
                  pinkjoosum@gmail.com
                </span>
              </div>
              <div className="flex gap-4 xl:gap-4 justify-center xl:justify-end">
                <div className="w-8 h-8 md:w-8 md:h-8 xl:w-8 xl:h-8 bg-neutral-300 rounded hover:bg-primary-600 transition-colors cursor-pointer"></div>
                <div className="w-8 h-8 md:w-8 md:h-8 xl:w-8 xl:h-8 bg-neutral-300 rounded hover:bg-primary-600 transition-colors cursor-pointer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
