import clsx from "clsx";
import HeroTextSection from "./hero/HeroTextSection";
import HeroMockup from "./hero/HeroImage";

export default function HeroSection() {
  return (
    <div
      className={clsx(
        "w-full bg-primary-500 relative",
        "px-5 py-[60px]",
        "md:px-8 md:py-20",
        "lg:px-20 lg:pt-20 lg:pb-0"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={clsx(
            "text-center",
            "lg:text-left lg:flex lg:items-start lg:justify-between lg:gap-16"
          )}
        >
          <HeroTextSection />
          <HeroMockup />
        </div>
      </div>
    </div>
  );
}
