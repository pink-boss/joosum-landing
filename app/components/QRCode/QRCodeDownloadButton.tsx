import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import { downloadStores } from './constants';

interface QRCodeDownloadButtonProps {
  isModal?: boolean;
}

/**
 *  Mobile 환경용 버튼
 */
export default function QRCodeDownloadButton({
  isModal = false,
}: QRCodeDownloadButtonProps) {
  return (
    <div
      className={clsx(
        'flex items-center',
        isModal ? 'flex-col gap-1' : 'gap-4',
        'md:hidden',
      )}
    >
      {downloadStores.map((store, index) => (
        <Link
          key={index}
          href={store.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={`Download Button ${index + 1}`}
            className="cursor-pointer transition-opacity hover:opacity-80"
            height={isModal ? 46.22 : 48}
            src={store.icon}
            width={isModal ? 148.14 : 144}
          />
        </Link>
      ))}
    </div>
  );
}
