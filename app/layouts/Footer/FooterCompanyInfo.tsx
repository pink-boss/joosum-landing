import clsx from 'clsx';

import { companyInfo, socialLinks } from './constants';
import SocialIcon from './FooterSocialIcon';

export default function FooterCompanyInfo() {
  return (
    <div
      className={clsx(
        'border-text-10 w-full border-t',
        'px-5 py-8',
        'md:px-20 md:py-12',
        'lg:px-24 lg:pt-12 lg:pb-24',
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className={clsx('md:flex md:items-start md:justify-between')}>
          <div className={clsx('mb-5', 'md:mb-0')}>
            <h4
              className={clsx(
                'font-semibold text-black',
                'mb-1 text-base',
                'md:mb-2 md:text-base',
                'lg:mb-1 lg:text-[16px]',
              )}
            >
              {companyInfo.name}
            </h4>
            <p
              className={clsx(
                'text-neutral-575',
                'text-sm',
                'md:text-xs',
                'lg:text-[16px]',
              )}
            >
              {companyInfo.copyright}
            </p>
          </div>

          <div
            className={clsx(
              'mb-4',
              'md:mb-0 md:flex-1 md:text-center',
              'lg:flex-none lg:text-right',
            )}
          >
            <div
              className={clsx(
                'flex items-center gap-2',
                'justify-start',
                'md:mb-3 md:justify-end',
                'lg:mb-2',
              )}
            >
              <span
                className={clsx(
                  'font-semibold text-black',
                  'text-base',
                  'md:text-base',
                  'lg:text-[16px]',
                )}
              >
                Contact:
              </span>
              <span
                className={clsx(
                  'text-neutral-525',
                  'text-base',
                  'md:text-base',
                  'lg:text-[16px]',
                )}
              >
                {companyInfo.contact}
              </span>
            </div>
            <div className={clsx('flex justify-end gap-4', 'lg:gap-4')}>
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
