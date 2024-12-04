"use client";

import { FiChevronDown } from "react-icons/fi";
import SidebarLogo from "./SidebarLogo";

const SidebarTitleSection = ({
  open,
  username,
}: {
  open: boolean;
  username: string | null | undefined;
}) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <SidebarLogo />
          {open && (
            <div>
              <span className="block text-xs font-semibold">{username}</span>
              <span className="block text-xs text-slate-500">
                Безплатен лиценз
              </span>
            </div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

export default SidebarTitleSection;
