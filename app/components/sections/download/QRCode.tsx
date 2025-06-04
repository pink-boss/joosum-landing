import { DownloadStore } from "./downloadData";
import Image from "next/image";
import Link from "next/link";

interface QRCodeProps {
  store: DownloadStore;
}

export default function QRCode({ store }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={store.qr} alt="QR Code" width={124} height={124} />
      <Link href={store.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={store.icon}
          alt="Download"
          width={124}
          height={39}
          className="cursor-pointer hover:opacity-80 transition-opacity"
        />
      </Link>
    </div>
  );
}
