"use client";

import { useState } from "react";
import clsx from "clsx";
import { usageData } from "./usage/usageData";
import UsageTagButton from "./usage/UsageTagButton";
import UsageContent from "./usage/UsageContent";
import { UsageNavigationButton } from "./usage/UsageNavigation";
import { sendGTMEvent } from "@next/third-parties/google";

export default function UsageSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? usageData.length - 1 : prev - 1));
    sendGTMEvent({
      event: "click",
      value: "click.usageDirection_main_landing",
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === usageData.length - 1 ? 0 : prev + 1));
    sendGTMEvent({
      event: "click",
      value: "click.usageDirection_main_landing",
    });
  };

  const handleTagClick = (index: number) => {
    setCurrentIndex(index);
    sendGTMEvent({ event: "click", value: "click.usageTab_main_landing" });
  };

  const currentData = usageData[currentIndex];

  return (
    <div
      className={clsx(
        "w-full bg-white",
        "px-5 py-16",
        "md:px-8 md:py-20",
        "lg:px-20 lg:py-24"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={clsx("text-center", "mb-8", "md:mb-6", "lg: text-left")}
        >
          <div
            className={clsx(
              "flex items-center justify-center",
              "flex-col",
              "md:flex-row md:gap-4",
              "lg:gap-3 lg:justify-start"
            )}
          >
            <h3
              className={clsx(
                "text-black",
                "text-xl font-medium",
                "md:text-4xl md:font-bold",
                "lg:text-[36px] lg:leading-10"
              )}
            >
              한 눈에 살펴보는
            </h3>
            <h2
              className={clsx(
                "font-bold text-primary-500",
                "text-3xl leading-8",
                "md:text-4xl",
                "lg:text-[36px] lg:leading-10"
              )}
            >
              주섬 사용법
            </h2>
          </div>
        </div>

        {/* 태그 버튼들 */}
        <div
          className={clsx(
            "flex flex-wrap justify-center",
            "gap-3 mb-8 max-w-[360px] mx-auto",
            "md:gap-4 md:mb-6 md:max-w-[500px] md:mx-auto",
            "lg:gap-6 lg:justify-start lg:max-w-full"
          )}
        >
          {usageData.map((item, index) => (
            <UsageTagButton
              key={item.tag}
              tag={item.tag}
              isActive={currentIndex === index}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </div>
      </div>

      {/* 사용법 콘텐츠 */}
      <div className={clsx("max-w-7xl mx-auto", "mt-8", "md:mt-16", "lg:mt-8")}>
        <div className="flex items-center justify-center lg:justify-between">
          <UsageNavigationButton
            direction="previous"
            onClick={handlePrevious}
          />

          <div className={clsx("flex-none", "mx-4", "md:mx-6", "lg:mx-8")}>
            <UsageContent data={currentData} />
          </div>

          <UsageNavigationButton direction="next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
