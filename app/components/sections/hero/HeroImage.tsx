import clsx from "clsx";
import Image from "next/image";

export default function HeroMockup() {
  return (
    <div
      className={clsx("flex justify-center", "lg:justify-end lg:flex-shrink-0")}
    >
      <div
        className={clsx(
          "rounded-2xl flex items-center justify-center relative",
          "w-[218.1px] h-[444.76px]",
          "md:w-[570px] md:h-[433.2px]",
          "lg:w-[658px] lg:h-[343px] lg:rounded-b-none lg:items-start"
        )}
        style={{ overflow: "hidden" }}
      >
        <Image
          src="/images/hero/hero-pc.png"
          alt="주섬 서비스 화면 미리보기"
          width={658}
          height={396.99}
          className="hidden lg:block"
        />
        <Image
          src="/images/hero/hero-ipad.png"
          alt="주섬 서비스 화면 미리보기"
          width={570}
          height={433.2}
          className="hidden md:block lg:hidden"
        />
        <Image
          src="/images/hero/hero-iphone.png"
          alt="주섬 서비스 화면 미리보기"
          width={218.1}
          height={444.76}
          className="block md:hidden"
        />
      </div>
    </div>
  );
}
