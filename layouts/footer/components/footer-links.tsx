'use client';

import Link from 'next/link';

import { Fragment } from 'react';

import { clsx } from '@/utils/clsx';

import { FOOTER_LINKS } from '../constants';

export default function FooterLinks() {
  return (
    <div className={clsx('border-text-10 w-full border-t', 'px-5', 'md:px-8', 'lg:px-16')}>
      <div
        className={clsx('flex flex-wrap items-center justify-around', 'py-4 text-xs', 'md:py-5, md:text-sm', 'lg:py-3')}
      >
        <Link
          className={clsx('my-auto flex-1 text-center text-black')}
          data-testid={FOOTER_LINKS[0].testId}
          href={FOOTER_LINKS[0].href ?? ''}
          rel={FOOTER_LINKS[0].newTab ? 'noopener noreferrer' : undefined}
          target={FOOTER_LINKS[0].newTab ? '_blank' : undefined}
        >
          <span className="hidden lg:block">개인정보처리방침</span>
          <span className="block whitespace-pre-wrap lg:hidden">개인정보{'\n'}처리방침</span>
        </Link>
        <hr className={clsx('bg-text-10 h-5 w-px border-0', 'md:h-10', 'lg:h-5')} />
        {FOOTER_LINKS.slice(1).map((link, index) => (
          <Fragment key={index}>
            <Link
              className={clsx('my-auto flex-1 text-center text-black')}
              data-testid={link.testId}
              href={link.href ?? ''}
              rel={link.newTab ? 'noopener noreferrer' : undefined}
              target={link.newTab ? '_blank' : undefined}
            >
              <span
                className={clsx(
                  'w-[81.5px] whitespace-pre-wrap lg:w-full',
                  link.title.includes('개인정보') ? 'lg:whitespace-nowrap' : 'lg:whitespace-normal',
                )}
              >
                {link.title}
              </span>
            </Link>
            {index < FOOTER_LINKS.length - 2 && (
              <hr className={clsx('bg-text-10 h-5 w-px border-0', 'md:h-10', 'lg:h-5')} />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
