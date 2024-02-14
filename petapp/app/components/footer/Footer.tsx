"use client";

import Container from "../Container";
import { FaSquareFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="hidden md:block fixed bottom-0 w-full z-10 bg-white">
      <div className="py-2 border-t-[1px]">
        <Container>
          <div className="flex flex-row overflow-hidden justify-between items-start gap-2 md:text-xs">
            <div>© 2024 Petland.bg</div>
            <div>·</div>
            <div className="hover:underline cursor-pointer">
              Условия за ползване
            </div>
            <div>·</div>
            <div className="hover:underline cursor-pointer">
              Политика за поверителност и бисквитки
            </div>
            <div>·</div>
            <div className="hover:underline cursor-pointer">
              Свържете се с нас
            </div>
            <div>·</div>
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
