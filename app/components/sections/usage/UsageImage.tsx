import clsx from "clsx";
import Image from "next/image";
import { UsageItem } from "./usageData";

interface UsageImageProps {
  data: UsageItem;
}

export default function UsageImage({ data }: UsageImageProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center mx-auto",
        "rounded-t-2xl w-48",
        "md:rounded-2xl w-full md:h-72",
        "lg:h-[280px] lg:w-[466px] lg:mx-0"
      )}
    >
      <Image
        src={data.image.mobile}
        alt={data.tag}
        width={251.1}
        height={444.3}
        className="block md:hidden"
      />
      <Image
        src={data.image.tablet}
        alt={data.tag}
        width={392}
        height={297.92}
        className="hidden md:block lg:hidden"
      />
      <Image
        src={data.image.tablet}
        alt={data.tag}
        width={427.5}
        height={324.9}
        className="hidden lg:block"
      />
    </div>
  );
}
