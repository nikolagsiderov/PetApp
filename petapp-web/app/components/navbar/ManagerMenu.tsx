"use client";

import { useRouter, usePathname } from "next/navigation";
import { RiDashboardFill } from "react-icons/ri";
import { MdNotificationsActive } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";

const NavigationMenu = () => {
  const router = useRouter();
  const params = usePathname();

  const currentPathIsBuying = params?.includes("buying");
  const currentPathIsFind = params?.includes("find");
  const currentPathIsLove = params?.includes("love");
  const currentPathIsPetSitting = params?.includes("petsitting");

  return (
    <div className="relative">
      <div className="flex flex-col items-start text-center gap-6 w-full">
        <div
          onClick={() => router.push("/manage")}
          className={`hidden md:block text-sm ${
            currentPathIsPetSitting ? "font-bold" : "font-light"
          } py-2 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer w-full`}
        >
          <div className="flex flex-row gap-2 justify-start items-center">
            <RiDashboardFill size={20} className="fill-sky-900" />
            Начало
          </div>
        </div>
        <div
          onClick={() => router.push("/manage/reservations")}
          className={`hidden md:block text-sm ${
            currentPathIsBuying ? "font-bold" : "font-light"
          } py-2 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer w-full`}
        >
          <div className="flex flex-row gap-2 justify-start items-center">
            <MdNotificationsActive size={20} className="fill-sky-900" />
            Чакащи заявки
          </div>
        </div>
        <div
          onClick={() => router.push("/manage/listing")}
          className={`hidden md:block text-sm ${
            currentPathIsFind ? "font-bold" : "font-light"
          } py-2 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer w-full`}
        >
          <div className="flex flex-row gap-2 justify-start items-center">
            <FaClipboardList size={20} className="fill-sky-900" />
            Моята обява
          </div>
        </div>
        <div
          onClick={() => router.push("/love")}
          className={`hidden md:block text-sm ${
            currentPathIsLove ? "font-bold" : "font-light"
          } py-2 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer w-full`}
        >
          <div className="flex flex-row gap-2 justify-start items-center">
            <IoSettings size={20} className="fill-sky-900" />
            Настройки
          </div>
        </div>
        <div
          onClick={() => router.push("/")}
          className={`hidden md:block md:mt-4 py-2 px-4 rounded-full hover:bg-rose-500 transition cursor-pointer group text-sm  w-full`}
        >
          <span className="group-hover:text-white group-hover:font-semibold">
            Към платформата
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
