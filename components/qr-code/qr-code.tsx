import Image from 'next/image';
import Link from 'next/link';

import { DownloadStore } from './constants';

interface Props {
  store: DownloadStore;
}

export default function QRCode({ store }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        alt={store.qr.includes('ios') ? 'iOS QR Code' : 'Android QR Code'}
        height={124}
        src={store.qr}
        width={124}
      />
      <Link href={store.url} rel="noopener noreferrer" target="_blank">
        <Image
          className="cursor-pointer transition-opacity hover:opacity-80"
          height={39}
          src={store.icon}
          width={124}
          alt={
            store.qr.includes('ios')
              ? 'iOS용 주섬 앱 다운로드를 위한 QR 코드 - App Store에서 스캔하여 다운로드'
              : 'Android용 주섬 앱 다운로드를 위한 QR 코드 - Google Play Store에서 스캔하여 다운로드'
          }
        />
      </Link>
    </div>
  );
}
