"use client";

import { useEffect } from "react";

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDownloadModal({
  isOpen,
  onClose,
}: AppDownloadModalProps) {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 백드롭 - 피그마 디자인에 맞게 opacity 0.82 */}
      <div
        className="absolute inset-0 bg-black bg-opacity-[0.82]"
        onClick={onClose}
      />

      {/* 모달 컨테이너 - 반응형 */}
      <div className="relative bg-white rounded-2xl mx-4 animate-in fade-in-0 zoom-in-95 duration-200 w-[319px] h-[408px] md:w-[653px] md:h-[491px]">
        <div className="p-5 md:p-10 h-full flex flex-col">
          {/* 제목 */}
          <div className="text-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-2xl font-semibold md:font-bold text-black mb-2 md:mb-4">
              주섬 앱 다운로드
            </h2>
            <p className="text-sm md:text-base text-[#2f2f2f] leading-[22px] md:leading-[19px]">
              <span className="md:hidden">
                버튼을 누르면
                <br />앱 설치화면으로 이동합니다.
              </span>
              <span className="hidden md:block">
                QR코드를 스캔하면 앱 설치화면으로 이동합니다.
              </span>
            </p>
          </div>

          {/* 모바일: 다운로드 버튼들 */}
          <div className="md:hidden flex-1 flex flex-col items-center justify-center gap-4 mb-6">
            {/* iOS 다운로드 버튼 */}
            <a
              href="https://apps.apple.com/app/joosum/id1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-[148px] h-[46px] bg-black rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M11.5 8.5c0-1.5 1.2-2.3 1.3-2.4-0.7-1-1.8-1.1-2.2-1.1-0.9-0.1-1.8 0.5-2.3 0.5s-1.2-0.5-2-0.5c-1 0-2 0.6-2.5 1.5-1.1 1.9-0.3 4.7 0.8 6.2 0.5 0.7 1.1 1.5 1.9 1.5 0.8 0 1.1-0.5 2.1-0.5s1.3 0.5 2.1 0.5c0.9 0 1.3-0.7 1.8-1.4 0.6-0.8 0.8-1.6 0.8-1.6s-1.5-0.6-1.5-2.2z"
                        fill="black"
                      />
                      <path
                        d="M9.8 3.5c0.4-0.5 0.7-1.2 0.6-1.9-0.6 0-1.3 0.4-1.7 0.9-0.4 0.4-0.7 1.1-0.6 1.8 0.7 0.1 1.3-0.3 1.7-0.8z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-xs leading-3">Download on the</div>
                    <div className="text-sm font-semibold leading-4">
                      App Store
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Android 다운로드 버튼 */}
            <a
              href="https://play.google.com/store/apps/details?id=com.joosum.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-[148px] h-[46px] bg-black rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1.5 1.5L8.5 8.5L1.5 15.5C1.2 15.2 1 14.8 1 14.3V2.7C1 2.2 1.2 1.8 1.5 1.5Z"
                        fill="#00D4FF"
                      />
                      <path
                        d="M11.5 6L8.5 8.5L11.5 11L14.5 9.5C15.2 9.1 15.2 8.4 14.5 8L11.5 6Z"
                        fill="#FFD500"
                      />
                      <path
                        d="M1.5 1.5L8.5 8.5L11.5 6L2.5 1C2 0.7 1.7 1 1.5 1.5Z"
                        fill="#FF5722"
                      />
                      <path
                        d="M1.5 15.5L8.5 8.5L11.5 11L2.5 16C2 16.3 1.7 16 1.5 15.5Z"
                        fill="#4CAF50"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-xs leading-3">GET IT ON</div>
                    <div className="text-sm font-semibold leading-4">
                      Google Play
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* 태블릿 이상: QR코드들 */}
          <div className="hidden md:flex flex-1 items-center justify-center gap-8 mb-6">
            {/* iOS QR코드 */}
            <div className="flex flex-col items-center">
              <div className="w-[124px] h-[124px] bg-text-10 rounded-xl mb-3 flex items-center justify-center">
                <div className="w-20 h-20 bg-neutral-400 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="6" height="6" fill="black" />
                    <rect x="10" y="2" width="2" height="2" fill="black" />
                    <rect x="14" y="2" width="2" height="2" fill="black" />
                    <rect x="18" y="2" width="2" height="2" fill="black" />
                    <rect x="24" y="2" width="6" height="6" fill="black" />
                    <rect x="4" y="4" width="2" height="2" fill="white" />
                    <rect x="26" y="4" width="2" height="2" fill="white" />
                    <rect x="2" y="10" width="2" height="2" fill="black" />
                    <rect x="6" y="10" width="2" height="2" fill="black" />
                    <rect x="10" y="10" width="2" height="2" fill="black" />
                    <rect x="14" y="10" width="2" height="2" fill="black" />
                    <rect x="18" y="10" width="2" height="2" fill="black" />
                    <rect x="22" y="10" width="2" height="2" fill="black" />
                    <rect x="26" y="10" width="2" height="2" fill="black" />
                    <rect x="30" y="10" width="2" height="2" fill="black" />
                    <rect x="2" y="14" width="2" height="2" fill="black" />
                    <rect x="10" y="14" width="2" height="2" fill="black" />
                    <rect x="18" y="14" width="2" height="2" fill="black" />
                    <rect x="26" y="14" width="2" height="2" fill="black" />
                    <rect x="2" y="18" width="2" height="2" fill="black" />
                    <rect x="6" y="18" width="2" height="2" fill="black" />
                    <rect x="14" y="18" width="2" height="2" fill="black" />
                    <rect x="22" y="18" width="2" height="2" fill="black" />
                    <rect x="30" y="18" width="2" height="2" fill="black" />
                    <rect x="2" y="24" width="6" height="6" fill="black" />
                    <rect x="10" y="24" width="2" height="2" fill="black" />
                    <rect x="14" y="24" width="2" height="2" fill="black" />
                    <rect x="18" y="24" width="2" height="2" fill="black" />
                    <rect x="24" y="24" width="6" height="6" fill="black" />
                    <rect x="4" y="26" width="2" height="2" fill="white" />
                    <rect x="26" y="26" width="2" height="2" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="w-[124px] h-[39px] bg-black rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M11.5 8.5c0-1.5 1.2-2.3 1.3-2.4-0.7-1-1.8-1.1-2.2-1.1-0.9-0.1-1.8 0.5-2.3 0.5s-1.2-0.5-2-0.5c-1 0-2 0.6-2.5 1.5-1.1 1.9-0.3 4.7 0.8 6.2 0.5 0.7 1.1 1.5 1.9 1.5 0.8 0 1.1-0.5 2.1-0.5s1.3 0.5 2.1 0.5c0.9 0 1.3-0.7 1.8-1.4 0.6-0.8 0.8-1.6 0.8-1.6s-1.5-0.6-1.5-2.2z"
                        fill="black"
                      />
                      <path
                        d="M9.8 3.5c0.4-0.5 0.7-1.2 0.6-1.9-0.6 0-1.3 0.4-1.7 0.9-0.4 0.4-0.7 1.1-0.6 1.8 0.7 0.1 1.3-0.3 1.7-0.8z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-[10px] leading-[10px]">
                      Download on the
                    </div>
                    <div className="text-xs font-semibold leading-3">
                      App Store
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Android QR코드 */}
            <div className="flex flex-col items-center">
              <div className="w-[124px] h-[124px] bg-text-10 rounded-xl mb-3 flex items-center justify-center">
                <div className="w-20 h-20 bg-neutral-400 rounded-lg flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="2" y="2" width="6" height="6" fill="black" />
                    <rect x="10" y="2" width="2" height="2" fill="black" />
                    <rect x="14" y="2" width="2" height="2" fill="black" />
                    <rect x="18" y="2" width="2" height="2" fill="black" />
                    <rect x="24" y="2" width="6" height="6" fill="black" />
                    <rect x="4" y="4" width="2" height="2" fill="white" />
                    <rect x="26" y="4" width="2" height="2" fill="white" />
                    <rect x="2" y="10" width="2" height="2" fill="black" />
                    <rect x="6" y="10" width="2" height="2" fill="black" />
                    <rect x="10" y="10" width="2" height="2" fill="black" />
                    <rect x="14" y="10" width="2" height="2" fill="black" />
                    <rect x="18" y="10" width="2" height="2" fill="black" />
                    <rect x="22" y="10" width="2" height="2" fill="black" />
                    <rect x="26" y="10" width="2" height="2" fill="black" />
                    <rect x="30" y="10" width="2" height="2" fill="black" />
                    <rect x="2" y="14" width="2" height="2" fill="black" />
                    <rect x="10" y="14" width="2" height="2" fill="black" />
                    <rect x="18" y="14" width="2" height="2" fill="black" />
                    <rect x="26" y="14" width="2" height="2" fill="black" />
                    <rect x="2" y="18" width="2" height="2" fill="black" />
                    <rect x="6" y="18" width="2" height="2" fill="black" />
                    <rect x="14" y="18" width="2" height="2" fill="black" />
                    <rect x="22" y="18" width="2" height="2" fill="black" />
                    <rect x="30" y="18" width="2" height="2" fill="black" />
                    <rect x="2" y="24" width="6" height="6" fill="black" />
                    <rect x="10" y="24" width="2" height="2" fill="black" />
                    <rect x="14" y="24" width="2" height="2" fill="black" />
                    <rect x="18" y="24" width="2" height="2" fill="black" />
                    <rect x="24" y="24" width="6" height="6" fill="black" />
                    <rect x="4" y="26" width="2" height="2" fill="white" />
                    <rect x="26" y="26" width="2" height="2" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="w-[124px] h-[39px] bg-black rounded-lg flex items-center justify-center">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M1.5 1.5L8.5 8.5L1.5 15.5C1.2 15.2 1 14.8 1 14.3V2.7C1 2.2 1.2 1.8 1.5 1.5Z"
                        fill="#00D4FF"
                      />
                      <path
                        d="M11.5 6L8.5 8.5L11.5 11L14.5 9.5C15.2 9.1 15.2 8.4 14.5 8L11.5 6Z"
                        fill="#FFD500"
                      />
                      <path
                        d="M1.5 1.5L8.5 8.5L11.5 6L2.5 1C2 0.7 1.7 1 1.5 1.5Z"
                        fill="#FF5722"
                      />
                      <path
                        d="M1.5 15.5L8.5 8.5L11.5 11L2.5 16C2 16.3 1.7 16 1.5 15.5Z"
                        fill="#4CAF50"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-[10px] leading-[10px]">GET IT ON</div>
                    <div className="text-xs font-semibold leading-3">
                      Google Play
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 설명 텍스트 */}
          <div className="text-center mb-6">
            <p className="text-sm md:text-base text-[#2f2f2f] leading-[22px] md:leading-[19px]">
              주섬 앱 다운로드 받고,
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>
              어디서든 내가 저장해둔
              <span className="md:hidden">
                <br />
              </span>
              <span className="hidden md:inline"> </span>
              컨텐츠를 열어보세요!
            </p>
          </div>

          {/* 닫기 버튼 - 피그마 디자인에 맞게 색상 조정 */}
          <button
            onClick={onClose}
            className="w-full h-14 md:h-14 bg-[#909090] md:bg-[#bbbbbb] text-white rounded-lg font-bold text-base hover:opacity-80 transition-opacity"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
