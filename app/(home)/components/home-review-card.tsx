import { useCallback } from 'react';

import { ReviewItem } from '@/app/(home)/constants';

import { clsx } from '@/utils/clsx';

interface Props {
  review: ReviewItem;
}

export default function HomeReviewCard({ review }: Props) {
  const renderStars = useCallback((rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '☆'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  }, []);

  return (
    <div
      className={clsx(
        'flex flex-shrink-0 flex-col rounded-2xl bg-neutral-50',
        'w-80 p-6',
        'md:w-96 md:p-8',
        'lg:w-100 lg:p-6',
      )}
    >
      <h3
        className={clsx(
          'font-semibold text-neutral-800',
          'mb-2 text-xl',
          'md:mb-3 md:text-2xl',
          'lg:mb-3 lg:text-[24px] lg:leading-[30px]',
        )}
      >
        {review.title.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < review.title.split('\n').length - 1 && <br />}
          </span>
        ))}
      </h3>
      <div
        className={clsx(
          'font-bold text-black',
          'mb-4 text-xl',
          'md:mb-6 md:text-2xl',
          'lg:mb-6 lg:text-[24px] lg:leading-[29px]',
        )}
      >
        <span className="text-[#FFC700]">{renderStars(review.rating)}</span>
        <span className="ml-2">{review.rating}</span>
      </div>
      <p
        className={clsx(
          'leading-relaxed text-neutral-600',
          'mb-4 text-base',
          'md:mb-6 md:text-lg',
          'lg:mb-6 lg:text-[16px] lg:leading-5',
        )}
      >
        {review.content.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < review.content.split('\n').length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className={clsx('mt-auto text-neutral-600', 'text-base', 'md:text-lg', 'lg:text-[16px] lg:leading-5')}>
        {review.author}
      </div>
    </div>
  );
}
