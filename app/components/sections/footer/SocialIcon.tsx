import clsx from "clsx";
import { SocialLink } from "./footerData";
import Link from "next/link";
import Image from "next/image";

interface SocialIconProps {
  social: SocialLink;
}

export default function SocialIcon({ social }: SocialIconProps) {
  return (
    <Link
      href={social.href}
      className={clsx("cursor-pointer")}
      aria-label={social.name}
    >
      <Image src={social.icon} alt={social.name} width={32} height={32} />
    </Link>
  );
}
