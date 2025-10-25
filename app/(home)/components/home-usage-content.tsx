import { clsx } from '@/utils/clsx';

import { type UsageItem } from '../constants';
import HomeUsageImage from './home-usage-image';

interface Props {
  data: UsageItem;
}

export default function HomeUsageContent({ data }: Props) {
  return (
    <div
      className={clsx(
        'rounded-3xl',
        'mx-auto flex max-w-83.5 flex-col py-6 sm:px-6',
        'md:max-w-none md:p-8',
        'lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-10 lg:py-12',
      )}
    >
      <div className={clsx('text-center', 'mb-6', 'md:mb-8 md:text-left', 'lg:mb-10')}>
        <h3
          className={clsx(
            'text-primary-700 leading-tight font-bold',
            'mb-3 text-xl',
            'md:mb-4 md:text-2xl',
            'lg:mb-4 lg:text-[32px] lg:leading-[42px]',
          )}
        >
          <span className="block md:hidden">
            {data.title.mobile.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.title.mobile.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden md:block lg:hidden">
            {data.title.tablet.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.title.tablet.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden lg:block">
            {data.title.desktop.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.title.desktop.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
        </h3>
        <p
          className={clsx('leading-relaxed text-neutral-600', 'text-sm', 'md:text-base', 'lg:text-[20px] lg:leading-7')}
        >
          <span className="block md:hidden">
            {data.description.mobile.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.description.mobile.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden md:block lg:hidden">
            {data.description.tablet.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.description.tablet.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
          <span className="hidden lg:block">
            {data.description.desktop.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index < data.description.desktop.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
        </p>
      </div>
      <HomeUsageImage data={data} />
    </div>
  );
}
