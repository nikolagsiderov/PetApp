"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";
import Avatar from "./Avatar";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  imageSrc?: string;
  selected?: boolean;
  withIcons?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  imageSrc,
  selected,
  withIcons,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/petsitting",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${
        selected ? "border-b-neutral-800" : "border-transparent"
      }
    ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      {withIcons && <Icon size={26} />}
      {!withIcons && (
        <Avatar
          src={imageSrc}
          roundedClass="rounded-lg"
          width={80}
          height={80}
        />
      )}
      <div className="font-medium text-sm -mt-2">{label}</div>
    </div>
  );
};

export default CategoryBox;
