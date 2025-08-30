import Image from 'next/image';
import Link from 'next/link';

import { DownloadStore } from './constants';

interface QRCodeProps {
  store: DownloadStore;
}

export default function QRCode({ store }: QRCodeProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image alt="QR Code" height={124} src={store.qr} width={124} />
      <Link href={store.url} rel="noopener noreferrer" target="_blank">
        <Image
          alt="Download"
          className="cursor-pointer transition-opacity hover:opacity-80"
          height={39}
          src={store.icon}
          width={124}
        />
      </Link>
    </div>
  );
}
