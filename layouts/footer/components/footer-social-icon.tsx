import Image from 'next/image';
import Link from 'next/link';

import { clsx } from '@/utils/clsx';

interface Props {
  href: string;
  icon: string;
  name: string;
}

export default function FooterSocialIcon({ href, icon, name }: Props) {
  return (
    <Link aria-label={name} className={clsx('cursor-pointer')} href={href}>
      <Image alt={name.replace('Link', 'Icon')} height={32} src={icon} width={32} />
    </Link>
  );
}
