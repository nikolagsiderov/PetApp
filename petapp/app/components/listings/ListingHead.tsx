"use client";

import Image from "next/image";
import useTowns from "@/app/hooks//useTowns";
import { SafeUser } from "@/app/types";
import Heading from "../Heading";
import HeartButton from "../HeartButton";
import { FaStar } from "react-icons/fa6";

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
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <Heading subtitle={`${location?.label}, ${location?.region}`} />
        </div>
        <div className="col-span-3 justify-end items-center flex flex-row text-xl font-light">
          <FaStar size={24} className="fill-amber-400" /> 4.5/5
        </div>
      </div>
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
