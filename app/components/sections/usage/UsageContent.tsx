import clsx from "clsx";
import { UsageItem } from "./usageData";

interface UsageContentProps {
  data: UsageItem;
}

export default function UsageContent({ data }: UsageContentProps) {
  return (
    <div
      className={clsx(
        "bg-neutral-200 rounded-3xl",
        "px-6 pt-6 pb-0 flex flex-col",
        "md:p-8",
        "lg:px-10 lg:py-12 lg:flex-row lg:items-center lg:justify-between"
      )}
    >
      <div
        className={clsx(
          "text-center",
          "mb-6",
          "md:mb-8 md:text-left",
          "lg:mb-10"
        )}
      >
        <h4
          className={clsx(
            "text-primary-700 font-bold leading-tight",
            "text-xl mb-3",
            "md:text-2xl md:mb-4",
            "lg:text-[32px] lg:mb-4 lg:leading-[42px]"
          )}
        >
          <span className="block md:hidden">
            {data.title.mobile.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < data.title.mobile.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden md:block lg:hidden">
            {data.title.tablet.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < data.title.tablet.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden lg:block">
            {data.title.desktop.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < data.title.desktop.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>
        </h4>
        <p
          className={clsx(
            "text-neutral-600 leading-relaxed",
            "text-sm",
            "md:text-base",
            "lg:text-[20px] lg:leading-7"
          )}
        >
          <span className="block md:hidden">
            {data.description.mobile.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < data.description.mobile.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </span>
          <span className="hidden md:block lg:hidden">
            {data.description.tablet.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < data.description.tablet.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </span>
          <span className="hidden lg:block">
            {data.description.desktop.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                {index < data.description.desktop.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </span>
        </p>
      </div>
      <div
        className={clsx(
          "bg-white flex items-center justify-center mx-auto",
          "h-64 rounded-t-2xl w-48",
          "md:h-80 md:rounded-2xl w-full",
          "lg:h-[280px] lg:w-[466px] lg:mx-0"
        )}
      >
        <span
          className={clsx(
            "text-neutral-500 text-center",
            "text-sm",
            "md:text-base",
            "lg:text-[14px] lg:leading-5"
          )}
        >
          {data.image}
        </span>
      </div>
    </div>
  );
}
