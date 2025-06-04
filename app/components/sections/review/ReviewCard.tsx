import clsx from "clsx";
import { ReviewItem } from "./reviewData";

interface ReviewCardProps {
  review: ReviewItem;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <>
        {"★".repeat(fullStars)}
        {hasHalfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div
      className={clsx(
        "bg-neutral-50 rounded-2xl flex-shrink-0 flex flex-col",
        "p-6 w-80",
        "md:p-8 md:w-96",
        "lg:p-6 lg:w-[400px]"
      )}
    >
      <h4
        className={clsx(
          "font-semibold text-neutral-800",
          "text-xl mb-2",
          "md:text-2xl md:mb-3",
          "lg:text-[24px] lg:mb-3 lg:leading-[30px]"
        )}
      >
        {review.title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < review.title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h4>
      <div
        className={clsx(
          "text-black font-bold",
          "text-xl mb-4",
          "md:text-2xl md:mb-6",
          "lg:text-[24px] lg:mb-6 lg:leading-[29px]"
        )}
      >
        <span className="text-[#FFC700]">{renderStars(review.rating)}</span>
        <span className="ml-2">{review.rating}</span>
      </div>
      <p
        className={clsx(
          "text-neutral-600 leading-relaxed",
          "text-base mb-4",
          "md:text-lg md:mb-6",
          "lg:text-[16px] lg:mb-6 lg:leading-5"
        )}
      >
        {review.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < review.content.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
      <div
        className={clsx(
          "text-neutral-600 mt-auto",
          "text-base",
          "md:text-lg",
          "lg:text-[16px] lg:leading-5"
        )}
      >
        {review.author}
      </div>
    </div>
  );
}
