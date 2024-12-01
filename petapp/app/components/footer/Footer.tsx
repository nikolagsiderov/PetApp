"use client";

import Container from "../Container";
import { FaSquareFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="hidden md:block fixed bottom-0 w-full z-30 bg-white/20 backdrop-blur">
      <div className="py-1 border-t-[1px]">
        <Container>
          <div className="flex flex-row overflow-hidden justify-between items-center gap-2 md:text-xs">
            <div>© 2024 PetApp</div>
            <div className="font-black">·</div>
            <div className="hover:underline cursor-pointer">
              Условия за ползване
            </div>
            <div className="font-black">·</div>
            <div className="hover:underline cursor-pointer">
              Политика за поверителност и бисквитки
            </div>
            <div className="font-black">·</div>
            <a
              href="https://nikolagsiderov.dev/"
              target="blank"
              className="flex flex-row gap-1 overflow-hidden"
            >
              <div className="mt-1">Изработка и дизайн: </div>
              <div className="bg-rose-500 text-white font-semibold py-1 px-2 rounded">
                nikolagsiderov.dev
              </div>
            </a>
            <div className="font-black">·</div>
            <div className="flex flex-row overflow-hidden justify-center items-center gap-2">
              <div>Последвай ни в социалните мрежи</div>
              <div className="cursor-pointer">
                <FaSquareFacebook size={18} className="text-blue-500" />
              </div>
              <div className="cursor-pointer">
                <FaInstagram size={18} className="text-red-500" />
              </div>
              <div className="cursor-pointer">
                <FaTiktok size={18} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
