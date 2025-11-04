import Image from 'next/image';

import { clsx } from '@/utils/clsx';

export default function HomeDownloadMockupImage() {
  return (
    <div className="relative">
      {/* 태블릿용 이미지 */}
      <Image
        alt=""
        className="hidden md:block lg:hidden"
        height={215.84}
        sizes="(max-width: 1239px) 284px, 0px"
        src="/images/home-hero-ipad.png"
        width={284}
      />
      {/* PC용 이미지와 오버레이 */}
      <div className="relative hidden lg:block">
        <div
          className={clsx(
            'absolute top-133 z-10 h-68.5 left-[116.78px] right-[116px] max-w-270.75',
            'bg-linear-to-b from-[#d9d9d9]/0 to-[#737373]',
          )}
        />
        <Image
          alt=""
          className="!h-[793.85px] w-[1315.78px]"
          height={793.85}
          sizes="(min-width: 1240px) 1315.78px, 0px"
          src="/images/home-hero-pc.png"
          width={1315.78}
        />
      </div>
    </div>
  );
}
