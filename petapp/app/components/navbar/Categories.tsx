"use client";

import Container from "../Container";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa6";
import { GiRabbit } from "react-icons/gi";
import { GiParrotHead } from "react-icons/gi";
import { IoFish } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { MdPestControlRodent } from "react-icons/md";

export const categories = [
  {
    label: "Кучета",
    icon: FaDog,
    imageSrc: "/images/dog.png",
    description: "Тази обява се отнася за кучета.",
  },
  {
    label: "Котета",
    icon: FaCat,
    imageSrc: "/images/cat.png",
    description: "Тази обява се отнася за котки.",
  },
  {
    label: "Зайчета",
    icon: GiRabbit,
    imageSrc: "/images/bunny.png",
    description: "Тази обява се отнася за зайци.",
  },
  {
    label: "Птици",
    icon: GiParrotHead,
    imageSrc: "/images/parrot.png",
    description: "Тази обява се отнася за птици.",
  },
  {
    label: "Рибки",
    icon: IoFish,
    imageSrc: "/images/fish.png",
    description: "Тази обява се отнася за риби.",
  },
  {
    label: "Гризачи",
    icon: MdPestControlRodent,
    imageSrc: "/images/pig.png",
    description: "Тази обява се отнася за гризачи.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
