'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import Link from 'next/link';

import clsx from 'clsx';

import { footerLinks } from './constants';

export default function FooterLinks() {
  const handleLinkClick = (titleUpper: string) => {
    switch (titleUpper) {
      case '개인정보':
        sendGTMEvent({ event: 'click.detailPrivacyPolicy_footer_landing' });
        break;
      case '서비스':
        sendGTMEvent({ event: 'click.agreeTermsOfService_footer_landing' });
        break;
      case '이용문의':
        sendGTMEvent({ event: 'click.contact_footer_landing' });
        break;
      case '공지사항':
        sendGTMEvent({ event: 'click.notice_footer_landing' });
        break;
    }
  };

  return (
    <div
      className={clsx(
        'border-text-10 w-full border-t',
        'px-5',
        'md:px-8',
        'lg:px-16',
      )}
    >
      <div
        className={clsx(
          'flex flex-wrap justify-around',
          'py-4 text-xs',
          'md:py-5, md:text-sm',
          'lg:py-3',
        )}
      >
        {footerLinks.map((link, index) =>
          'titleUpper' in link ? (
            <Link
              key={index}
              className={clsx('my-auto flex-1 text-center text-black')}
              href={link.href}
              target={link.newTab ? '_blank' : undefined}
              onClick={() => handleLinkClick(link.titleUpper)}
            >
              <span className="hidden lg:block">{link.titleUpper}</span>
              <span className="block lg:hidden">
                <p>{link.titleUpper}</p>
                <p>{link.titleLower}</p>
              </span>
            </Link>
          ) : (
            <div
              key={index}
              className={clsx('bg-text-10 h-5 w-px', 'md:h-10', 'lg:h-5')}
            />
          ),
        )}
      </div>
    </div>
  );
}
