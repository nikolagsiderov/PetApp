"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  includeCompanyName?: boolean | null;
}

const Logo: React.FC<LogoProps> = ({ includeCompanyName }) => {
  const router = useRouter();

  return (
    <>
      <div className="hidden md:block">
        {includeCompanyName ? (
          <Image
            onClick={() => router.push("/")}
            alt="logo"
            className="block cursor-pointer"
            height="312"
            width="170"
            src="/images/logo extended.png"
          />
        ) : (
          <Image
            onClick={() => router.push("/")}
            alt="logo"
            className="block cursor-pointer"
            height="50"
            width="50"
            src="/images/logo.png"
          />
        )}
      </div>
      <div className="md:hidden">
        <Image
          onClick={() => router.push("/")}
          alt="logo"
          className="block cursor-pointer"
          height="312"
          width="170"
          src="/images/logo extended.png"
        />
      </div>
    </>
  );
};

export default Logo;
