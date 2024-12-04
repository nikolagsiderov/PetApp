"use client";

import { useRouter } from "next/navigation";
import { IoMdPaw } from "react-icons/io";

const SidebarReturn = ({ open }: { open: boolean }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="group absolute bottom-12 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-rose-500 hover:text-white"
    >
      <div className="flex items-center p-2">
        <div className="grid size-8 place-content-center">
          <IoMdPaw size={20} className="text-rose-500 group-hover:text-white" />
        </div>
        {open && <span className="text-sm font-medium">Към платформата</span>}
      </div>
    </button>
  );
};

export default SidebarReturn;
