import clsx from "clsx";
import FolderTag from "../FolderTag";

export default function FolderSection() {
  return (
    <div
      className={clsx(
        "w-full bg-primary-50",
        "px-8 py-16",
        "md:px-20 md:py-20",
        "lg:py-24"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={clsx(
            "text-left",
            "mb-8",
            "md:mb-12",
            "lg:flex lg:items-start lg:justify-start lg:gap-20 lg:mb-16"
          )}
        >
          <h2
            className={clsx(
              "font-bold text-primary-500 leading-tight",
              "text-3xl mb-8",
              "md:text-4xl md:mb-12",
              "lg:text-[36px] lg:leading-[42px] lg:max-w-[266px] lg:mb-0"
            )}
          >
            <span className="block">
              흩어진 정보들 모두
              <br />한 곳에서 봐요
            </span>
          </h2>

          {/* 폴더 태그들 */}
          <div
            className={clsx(
              "flex flex-wrap max-w-sm",
              "gap-3 justify-self-end",
              "md:gap-4 md:max-w-[450px]",
              "lg:gap-6 lg:max-w-[574px] lg:mx-0"
            )}
          >
            <FolderTag>🍜 오사카 맛집</FolderTag>
            <FolderTag>👟 홈트 영상</FolderTag>
            <FolderTag>🎨 디자인 레퍼런스</FolderTag>
            <FolderTag>💰 재테크 공부</FolderTag>
            <FolderTag>📷 Vlog 카메라</FolderTag>
            <FolderTag>✏️ 토익 학습자료</FolderTag>
          </div>
        </div>
      </div>
    </div>
  );
}
