import clsx from "clsx";
import { MockupImage, QRCodeSection, MobileDownloadButtons } from "./download";

export default function DownloadSection() {
  return (
    <>
      <div
        className={clsx(
          "w-full bg-primary-50",
          "px-6 py-16",
          "md:p-20",
          "lg:px-20 lg:pt-20 lg:pb-px"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <div className={clsx("lg:flex lg:justify-between ")}>
            <div className={clsx("mb-0", "lg:mb-16")}>
              <h2
                className={clsx(
                  "font-bold text-primary-500",
                  "text-2xl mb-1",
                  "md:text-4xl",
                  "lg:text-[42px] lg:mb-2 lg:leading-[50px]"
                )}
              >
                <span className="md:hidden">
                  <p>어디서든 링크를 저장하고</p>
                  <p>확인해보세요.</p>
                </span>
                <span className="hidden md:block">
                  어디서든 링크를 저장하고 확인해보세요.
                </span>
              </h2>
              <span
                className={clsx(
                  "text-neutral-800 leading-relaxed",
                  "text-base",
                  "md:text-xl",
                  "lg:text-2xl lg:leading-[29px]"
                )}
              >
                <span className="md:hidden">
                  <p>PC, 태블릿, 모바일 기기 등 하나의 계정으로</p>
                  <p>연동해서 링크를 관리해보세요.</p>
                </span>
                <span className="hidden md:block">
                  PC, 태블릿, 모바일 기기 등 하나의 계정으로 연동해서 링크를
                  관리해보세요.
                </span>
              </span>
            </div>

            <div className="hidden lg:block">
              <QRCodeSection />
            </div>
          </div>

          {/* 다운로드 섹션 */}
          <div
            className={clsx(
              "flex items-center",
              "flex-col gap-6 justify-center mt-7",
              "md:flex-row md:gap-8 md:justify-center",
              "lg:justify-center lg:flex-1 lg:gap-6 lg:mt-10"
            )}
          >
            {/* 모바일에서는 버튼만 */}
            <MobileDownloadButtons />

            {/* 태블릿/PC에서는 목업 이미지와 QR코드들 */}
            <div
              className={clsx(
                "hidden",
                "md:block",
                "lg:h-[680.9px] lg:relative"
              )}
              style={{
                overflow: "hidden",
              }}
            >
              {/* 목업 이미지 */}
              <MockupImage />
            </div>
            <div className={clsx("hidden", "md:block", "lg:hidden")}>
              <QRCodeSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
