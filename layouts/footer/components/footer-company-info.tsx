import { clsx } from '@/utils/clsx';

import { FOOTER_COMPANY_INFO, FOOTER_SOCIAL_LINKS } from '../constants';
import FooterSocialIcon from './footer-social-icon';

export default function FooterCompanyInfo() {
  return (
    <div
      className={clsx('border-text-10 w-full border-t', 'px-5 py-8', 'md:px-20 md:py-12', 'lg:px-24 lg:pt-12 lg:pb-24')}
    >
      <div className="mx-auto max-w-7xl">
        <div className={clsx('md:flex md:items-start md:justify-between')}>
          <div className={clsx('mb-5', 'md:mb-0')}>
            <h3
              className={clsx(
                'font-semibold text-black',
                'mb-1 text-base',
                'md:mb-2 md:text-base',
                'lg:mb-1 lg:text-[16px]',
              )}
            >
              {FOOTER_COMPANY_INFO.name}
            </h3>
            <p className={clsx('text-neutral-575', 'text-sm', 'md:text-xs', 'lg:text-[16px]')}>
              {FOOTER_COMPANY_INFO.copyright}
            </p>
          </div>
          <div className={clsx('mb-4', 'md:mb-0 md:flex-1 md:text-center', 'lg:flex-none lg:text-right')}>
            <div className={clsx('flex items-center gap-2', 'justify-start', 'md:mb-3 md:justify-end', 'lg:mb-2')}>
              <span className={clsx('font-semibold text-black', 'text-base', 'md:text-base', 'lg:text-[16px]')}>
                Contact:
              </span>
              <a
                className={clsx('text-neutral-525', 'text-base', 'md:text-base', 'lg:text-[16px]')}
                href={`mailto:${FOOTER_COMPANY_INFO.contact}`}
              >
                {FOOTER_COMPANY_INFO.contact}
              </a>
            </div>
            <div className={clsx('flex justify-end gap-4', 'lg:gap-4')}>
              {FOOTER_SOCIAL_LINKS.map(({ href, icon, name }, index) => (
                <FooterSocialIcon key={index} href={href} icon={icon} name={name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
