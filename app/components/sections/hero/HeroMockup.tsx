import clsx from "clsx";

export default function HeroMockup() {
  return (
    <div
      className={clsx("flex justify-center", "lg:justify-end lg:flex-shrink-0")}
    >
      <div
        className={clsx(
          "bg-white rounded-2xl flex items-center justify-center",
          "w-40 h-80",
          "md:w-[582px] md:h-[347px]",
          "lg:w-[512px] lg:h-[343px] lg:rounded-b-none"
        )}
        role="img"
        aria-label="주섬 서비스 화면 미리보기"
      >
        <span
          className={clsx(
            "text-neutral-500 text-center",
            "text-sm",
            "md:text-lg",
            "lg:text-[13.5px] lg:leading-5"
          )}
        >
          <span className="block md:hidden">모바일 화면</span>
          <span className="hidden md:block lg:hidden">
            웹 로그인 후 화면
            <br />
            (폴더랑 링크 생성 수 많은,,, 가라데이터 넣은 상태)
          </span>
          <span className="hidden lg:block">
            웹 로그인 후 화면
            <br />
            (폴더랑 링크 생성 수 많은,,, 가라데이터 넣은 상태)
          </span>
        </span>
      </div>
    </div>
  );
}
