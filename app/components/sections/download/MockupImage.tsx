import clsx from "clsx";
import Image from "next/image";

export default function MockupImage() {
  return (
    <>
      <Image
        src="/images/hero/hero-ipad.png"
        alt="download-image"
        width={284}
        height={215.84}
        className="hidden md:block lg:hidden"
      />
      <div
        className={clsx(
          "hidden lg:block",
          "top-[532px] absolute max-w-[1083px] w-4/5 h-[274px] z-30",
          "bg-linear-to-b to-[#737373] from-[#d9d9d9]/0",
          "left-1/2 -translate-x-1/2"
        )}
      ></div>
      <Image
        src="/images/hero/hero-pc.png"
        alt="download-image"
        width={1315.78}
        height={793.85}
        className="lg:block hidden"
        style={{
          width: "1315.78px",
          height: "793.85px",
        }}
      />
    </>
  );
}
