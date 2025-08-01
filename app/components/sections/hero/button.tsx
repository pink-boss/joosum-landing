"use client";

import { openJoosumApp } from "@/app/utils/deviceUtils";
import clsx from "clsx";

export default function Button() {
  return (
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
  );
}
