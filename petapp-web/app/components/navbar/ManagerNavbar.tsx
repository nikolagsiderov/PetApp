"use client";

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import ManagerMenu from "./ManagerMenu";
import NavigationMenu from "./NavigationMenu";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import { usePathname } from "next/navigation";

interface ManagerNavbarProps {
  currentUser?: SafeUser | null;
}

const ManagerNavbar: React.FC<ManagerNavbarProps> = ({ currentUser }) => {
  const params = usePathname();

  const currentPathIsBuying = params?.includes("buying");
  const currentPathIsFind = params?.includes("find");
  const currentPathIsLove = params?.includes("love");
  const currentPathIsPetSitting = params?.includes("petsitting");

  return (
    <div className="hidden lg:block fixed h-screen left-0 bg-white z-10 shadow-sm">
      <div className="py-4 px-8 lg:border-b-[1px] lg:border-neutral-100">
        <div className="flex flex-col items-start justify-center gap-8">
          <ManagerMenu />
        </div>
      </div>
      {currentPathIsPetSitting && <Categories />}
    </div>
  );
};

export default ManagerNavbar;
