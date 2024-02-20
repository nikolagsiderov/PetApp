"use client";

import { IconType } from "react-icons";
import { SafeReview, SafeUser } from "@/app/types";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

interface ListingInfoProps {
  user: SafeUser;
  reviews?: SafeReview[] | null | undefined;
  description: string;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  reviews,
  description,
  category,
}) => {
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Обявата е публикувана от {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div
          className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        ></div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <hr />
      <div
        className="
      text-lg font-light text-neutral-500"
      >
        {description}
      </div>
      {reviews && (
        <div className="flex flex-col gap-8">
          <hr />
          <div
            className="
      text-xl font-semibold flex flex-row gap-2"
          >
            <HiChatBubbleBottomCenterText size={28} className="fill-neutral-800" />
            Отзиви
          </div>
          {reviews.map((review: SafeReview) => (
            <div
              key={review.id}
              className="
      text-lg font-light text-neutral-500"
            >
              {review.user.name} | {review.publicMessage}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListingInfo;
