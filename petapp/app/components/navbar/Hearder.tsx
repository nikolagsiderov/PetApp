"use client";

import Container from "../Container";
import { FaSquareFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="hidden md:block fixed top-0 w-full z-10 bg-white">
      <div className="py-2 border-t-[1px]">
        <Container>
          <div className="flex flex-row overflow-hidden justify-center items-center gap-2 text-[10px]">
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
        </Container>
      </div>
    </div>
  );
};

export default Header;
