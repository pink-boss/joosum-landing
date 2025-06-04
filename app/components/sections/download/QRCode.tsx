import { DownloadStore } from "./downloadData";
import Image from "next/image";

interface QRCodeProps {
  store: DownloadStore;
}

export default function QRCode({ store }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={store.qr} alt="QR Code" width={124} height={124} />
      <Image src={store.download} alt="Download" width={124} height={39} />
    </div>
  );
}
