import Image from 'next/image';

import clsx from 'clsx';

export default function DownloadMockupImage() {
  return (
    <>
      <Image
        alt="download-image"
        className="hidden md:block lg:hidden"
        height={215.84}
        src="/images/hero/hero-ipad.png"
        width={284}
      />
      <div
        className={clsx(
          'hidden lg:block',
          'absolute top-[532px] z-30 h-[274px] w-4/5 max-w-[1083px]',
          'bg-linear-to-b from-[#d9d9d9]/0 to-[#737373]',
          'left-1/2 -translate-x-1/2',
        )}
      />
      <Image
        alt="download-image"
        className="hidden lg:block"
        height={793.85}
        src="/images/hero/hero-pc.png"
        width={1315.78}
        style={{
          width: '1315.78px',
          height: '793.85px',
        }}
      />
    </>
  );
}
