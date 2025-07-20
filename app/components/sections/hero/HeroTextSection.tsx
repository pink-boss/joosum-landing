import clsx from "clsx";
import Button from "./button";

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
      <Button />
    </div>
  );
}
