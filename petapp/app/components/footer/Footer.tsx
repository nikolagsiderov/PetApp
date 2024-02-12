"use client";

import Container from "../Container";

const Footer = () => {
  return (
    <div className="hidden md:block fixed bottom-0 w-full z-10 bg-white">
      <div className="py-2 border-t-[1px]">
        <Container>
          <div className="flex flex-row overflow-hidden items-start gap-4 text-[10px] md:text-sm">
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
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
