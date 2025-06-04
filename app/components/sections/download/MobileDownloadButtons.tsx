import Image from "next/image";
import Link from "next/link";
import { downloadStores } from "./downloadData";
import clsx from "clsx";

interface MobileDownloadButtonsProps {
  isModal?: boolean;
}

export default function MobileDownloadButtons({
  isModal = false,
}: MobileDownloadButtonsProps) {
  return (
    <div
      className={clsx(
        "flex items-center",
        isModal ? "flex-col gap-1" : "gap-4",
        "md:hidden"
      )}
    >
      {downloadStores.map((store, index) => (
        <Link
          key={index}
          href={store.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={store.icon}
            alt={`Download Button ${index + 1}`}
            width={isModal ? 148.14 : 144}
            height={isModal ? 46.22 : 48}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      ))}
    </div>
  );
}
