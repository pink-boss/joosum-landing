import clsx from "clsx";

interface MockupImageProps {
  title: string;
  description: string;
}

export default function MockupImage({ title, description }: MockupImageProps) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl flex flex-col items-center justify-center",
        "p-6 w-[284px] h-[171px]",
        "lg:p-12 lg:w-full lg:h-[468px]"
      )}
    >
      <div className="text-center">
        <span
          className={clsx(
            "text-neutral-800 font-bold block",
            "text-xs mb-2",
            "lg:text-[24px] lg:mb-4"
          )}
        >
          {title}
        </span>
        <span
          className={clsx(
            "text-neutral-800 leading-relaxed",
            "text-xs",
            "lg:text-[20px] lg:leading-7"
          )}
        >
          {description}
        </span>
      </div>
    </div>
  );
}
