"use client";

import { SafeReview } from "@/app/types";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import Avatar from "../Avatar";
import { FaStar } from "react-icons/fa6";

interface ListingReviewsProps {
  reviews?: SafeReview[] | null | undefined;
}

const ListingReviews: React.FC<ListingReviewsProps> = ({ reviews }) => {
  return (
    <>
      {reviews && (
        <div className="flex flex-col gap-8">
          <hr />
          <div
            className="
      text-xl font-semibold flex flex-row gap-2"
          >
            <HiChatBubbleBottomCenterText
              size={28}
              className="fill-neutral-800"
            />
            Отзиви
          </div>
          {reviews.map((review: SafeReview) => (
            <div key={review.id} className="mb-4">
              <div
                className="
      text-lg font-light text-neutral-800"
              >
                <div className="grid grid-cols-12 mb-2">
                  <div className="col-span-9 flex flex-row gap-4 text-lg font-semibold items-center justify-start">
                    <Avatar width={50} height={50} src={review.user.image} />
                    {review.user.name}
                  </div>
                  <div className="col-span-3 flex flex-row gap-1 text-lg font-semibold items-center justify-end">
                    <FaStar size={32} className="fill-amber-500" />
                    4.5/5
                  </div>
                </div>
                <div className="whitespace-pre-wrap">
                  {review.publicMessage}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ListingReviews;
