import Image from 'next/image';

import { UsageItem } from '@/app/(home)/constants';

import { clsx } from '@/utils/clsx';

interface Props {
  data: UsageItem;
}

export default function HomeUsageImage({ data }: Props) {
  return (
    <div
      className={clsx(
        'mx-auto flex items-center justify-center',
        'h-[505.86px] w-48 rounded-t-2xl',
        'w-full md:h-72 md:rounded-2xl',
        'lg:mx-0 lg:h-[280px] lg:w-[466px]',
      )}
    >
      <Image alt={data.tag} className="block md:hidden" height={354} src={data.image.mobile} width={286} />
      <Image alt={data.tag} className="hidden md:block lg:hidden" height={297.92} src={data.image.tablet} width={392} />
      <Image alt={data.tag} className="hidden lg:block" height={324.9} src={data.image.tablet} width={427.5} />
    </div>
  );
}
