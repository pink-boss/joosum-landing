import clsx from "clsx";
import { openJoosumApp } from "../../../utils/deviceUtils";

export default function HeroTextSection() {
  return (
    <div
      className={clsx(
        "mb-8",
        "md:mb-6",
        "lg:mb-0 lg:max-w-[445px] lg:flex-shrink-0"
      )}
    >
      <h1
        className={clsx(
          "text-white font-extrabold",
          "text-2xl",
          "md:text-4xl md:mb-1.5",
          "lg:text-[40px] lg:mb-2 lg:leading-[48px]"
        )}
      >
        간편한 링크 아카이빙
      </h1>
      <h2
        className={clsx(
          "text-white font-extrabold mb-3",
          "text-[32px]",
          "md:text-5xl md:mb-8",
          "lg:text-[52px] lg:mb-10 lg:leading-[62px]"
        )}
      >
        지금 바로 경험하세요!
      </h2>
      <button
        onClick={openJoosumApp}
        className={clsx(
          "bg-white text-primary-500 rounded-xl font-bold hover:bg-neutral-50 transition-colors cursor-pointer",
          "px-4 py-2 text-base",
          "md:px-5 md:py-4 md:text-lg",
          "lg:px-12 lg:py-6 lg:text-[28px] lg:w-[250px] lg:h-[78px] lg:flex lg:items-center lg:justify-center"
        )}
      >
        주섬 시작하기
      </button>
    </div>
  );
}
