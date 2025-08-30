import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

import { SocialLink } from './constants';

interface FooterSocialIconProps {
  social: SocialLink;
}

export default function FooterSocialIcon({ social }: FooterSocialIconProps) {
  return (
    <Link
      aria-label={social.name}
      className={clsx('cursor-pointer')}
      href={social.href}
    >
      <Image alt={social.name} height={32} src={social.icon} width={32} />
    </Link>
  );
}
