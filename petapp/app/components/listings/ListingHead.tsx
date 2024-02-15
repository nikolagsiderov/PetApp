"use client";

import Image from "next/image";
import useTowns from "@/app/hooks//useTowns";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  locationCode: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  locationCode,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useTowns();

  const location = getByValue(locationCode);

  return (
    <>
      <Heading subtitle={`${location?.label}, ${location?.region}`} />
      <div
        className="
          w-full
          h-[60vh]
          overflow-hidden 
          rounded-xl
          relative
        "
      >
        <Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
        />
        <div
          className="
            absolute
            top-5
            right-5
          "
        >
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
