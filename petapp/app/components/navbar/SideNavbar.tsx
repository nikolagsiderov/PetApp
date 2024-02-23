"use client";

import React, { useCallback, useState } from "react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Logo from "./Logo";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import UserMenu from "./UserMenu";
import { RiListSettingsLine, RiAlarmWarningFill } from "react-icons/ri";
import { IoMdPaw } from "react-icons/io";
import { useRouter } from "next/navigation";

const SideNavbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div>
      <div className="lg:hidden my-4 mx-6 p-4 bg-white z-30 fixed -top-4 -right-4">
        <UserMenu />
      </div>
      <div
        onClick={toggleOpen}
        className="lg:hidden my-4 mx-6 p-4 bg-white z-30 fixed top-0 right-16 rounded-full border-b-[2px] border-neutral-200 shadow-xl transition"
      >
        {isOpen ? (
          <HiOutlineChevronDoubleLeft />
        ) : (
          <HiOutlineChevronDoubleRight />
        )}
      </div>
      <div
        className={`px-6 w-80 h-screen bg-white z-20 fixed top-0 ${
          isOpen ? "left-0" : "-left-96"
        } lg:left-0 lg:w-80 peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}
      >
        <div className="flex flex-col justify-start item-center">
          <h1 className="py-4 text-base text-center cursor-pointer font-bold text-blue-900 border-b-[2px] border-neutral-100 w-full">
            <Logo includeCompanyName />
          </h1>
          <div className="my-4 border-b-[2px] border-neutral-100 pb-4">
            <div
              onClick={() => router.push("/manage")}
              className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Начало
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <RiAlarmWarningFill className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Чакащи заявки
              </h3>
            </div>
            <div
              onClick={() => router.push("/manage/listing")}
              className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <RiListSettingsLine className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Моята обява
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Отзиви
              </h3>
            </div>
            <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Анализ
              </h3>
            </div>
          </div>
          {/* setting  */}
          <div className=" my-4 border-b-[2px] border-neutral-100 pb-4">
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Настройки
              </h3>
            </div>
            <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
              <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Още
              </h3>
            </div>
          </div>
          <div className="mt-4">
            <div
              onClick={() => router.push("/")}
              className="flex mb-2 justify-start items-center gap-4 pl-5 border border-neutral-200 hover:bg-rose-500 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto"
            >
              <IoMdPaw className="text-2xl text-rose-500 group-hover:text-white" />
              <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                Към платформата
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
