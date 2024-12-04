"use client";

import React, { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

const SidebarOption = ({
  Icon,
  title,
  selected,
  setSelected,
  open,
  notifs,
}: {
  Icon: IconType;
  title: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  open: boolean;
  notifs?: number;
}) => {
  return (
    <button
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-sky-950"
          : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      <div className="grid h-full w-10 place-content-center text-lg">
        <Icon />
      </div>
      {open && (
        <span
          className={`text-xs ${
            selected === title ? "font-extrabold" : "font-semibold"
          }`}
        >
          {title}
        </span>
      )}

      {notifs && open && (
        <span className="absolute right-2 size-5 m-1 p-[0.1rem] rounded-full bg-sky-900 text-xs text-white">
          {notifs}
        </span>
      )}
    </button>
  );
};

export default SidebarOption;
