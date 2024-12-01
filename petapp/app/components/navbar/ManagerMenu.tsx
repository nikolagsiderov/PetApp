"use client";

import { IoMdPaw } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillAlert } from "react-icons/ai";
import { IoMdListBox } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

const NavigationMenu = () => {
  const router = useRouter();
  const params = usePathname();

  const currentPathIsBuying = params?.includes("buying");
  const currentPathIsFind = params?.includes("find");
  const currentPathIsLove = params?.includes("love");
  const currentPathIsPetSitting = params?.includes("petsitting");

  return (
    <div className="relative">
      <div className="flex flex-col items-start text-center gap-3">
        <div
          onClick={() => router.push("/manage")}
          className={`hidden md:block text-sm ${
            currentPathIsPetSitting ? "font-bold" : "font-light"
          } py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer`}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <BiSolidDashboard size={24} className="fill-sky-900" />
            Начало
          </div>
        </div>
        <div
          onClick={() => router.push("/manage/reservations")}
          className={`hidden md:block text-sm ${
            currentPathIsBuying ? "font-bold" : "font-light"
          } py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer`}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <AiFillAlert size={24} className="fill-sky-900" />
            Чакащи заявки
          </div>
        </div>
        <div
          onClick={() => router.push("/manage/listing")}
          className={`hidden md:block text-sm ${
            currentPathIsFind ? "font-bold" : "font-light"
          } py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer`}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <IoMdListBox size={24} className="fill-sky-900" />
            Моята обява
          </div>
        </div>
        <div
          onClick={() => router.push("/love")}
          className={`hidden md:block text-sm ${
            currentPathIsLove ? "font-bold" : "font-light"
          } py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer`}
        >
          <div className="flex flex-row gap-1 justify-center items-center">
            <IoSettings size={24} className="fill-sky-900" />
            Настройки
          </div>
        </div>
        <br />
        <div
          onClick={() => router.push("/")}
          className={`hidden md:block py-3 px-4 rounded-full hover:bg-rose-500 transition cursor-pointer group text-sm`}
        >
          <span className="group-hover:text-white font-semibold">
            Към платформата
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
