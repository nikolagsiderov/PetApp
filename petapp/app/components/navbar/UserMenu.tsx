"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import useBecomeSitterModal from "@/app/hooks/useBecomeSitterModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const becomeSitterModal = useBecomeSitterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const becomeSitter = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    becomeSitterModal.onOpen();
  }, [currentUser, loginModal, becomeSitterModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center text-center gap-3">
        <div
          onClick={becomeSitter}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Стани гледач
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="Моите резервации"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="Запазени обяви"
                />
                <MenuItem
                  onClick={() => router.push("/my-listings")}
                  label="Мойте обяви"
                />
                <MenuItem
                  onClick={becomeSitterModal.onOpen}
                  label="Стани гледач"
                />
                <hr />
                <MenuItem onClick={() => signOut()} label="Излез" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Влез" />
                <MenuItem
                  onClick={registerModal.onOpen}
                  label="Регистрирай се"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;