export type FooterLinkTitle = {
  href: string;
  newTab?: boolean;
  titleLower?: string;
  titleUpper: string;
};

export type FooterLink = { isBorder?: boolean } | FooterLinkTitle;

export const footerLinks: FooterLink[] = [
  {
    titleUpper: '개인정보',
    titleLower: '처리방침',
    href: 'https://joosum.notion.site/a078243be717462296cbe664a121212c',
    newTab: true,
  },
  { isBorder: true },
  {
    titleUpper: '서비스',
    titleLower: '이용약관',
    href: 'https://joosum.notion.site/6df241a6e3174b8fbfc7933a506a0b1e',
    newTab: true,
  },
  { isBorder: true },
  {
    titleUpper: '이용문의',
    href: '/contact',
  },
  { isBorder: true },
  {
    titleUpper: '공지사항',
    href: 'https://joosum.notion.site/d1bf0517402744ee804c7d645a472610',
    newTab: true,
  },
];

export interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Notion Link',
    icon: '/icons/notion.png',
    href: 'https://joosum.notion.site/Joosum-96fd00ee82ab49568abce938be7c4faf',
  },
  {
    name: 'Instagram Link',
    icon: '/icons/instagram.png',
    href: 'https://www.instagram.com/joosum_official/',
  },
];

export const companyInfo = {
  name: 'Pinkboss',
  copyright: `Copyright ⓒ ${new Date().getFullYear()}, Pinkboss. All rights reserved.`,
  contact: 'pinkjoosum@gmail.com',
};
