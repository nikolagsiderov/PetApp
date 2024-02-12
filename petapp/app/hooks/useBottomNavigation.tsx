"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const useBottomNavigation = () => {
  const pathname = usePathname();
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isBuyingActive, setIsBuyingActive] = useState(false);
  const [isFindActive, setIsFindActive] = useState(false);
  const [isLoveActive, setIsLoveActive] = useState(false);

  useEffect(() => {
    setIsHomeActive(false);
    setIsBuyingActive(false);
    setIsFindActive(false);
    setIsLoveActive(false);

    switch (pathname) {
      case "/":
        setIsHomeActive(true);
        break;
      case "/buying":
        setIsBuyingActive(true);
        break;
      case "/find":
        setIsFindActive(true);
        break;
      case "/love":
        setIsLoveActive(true);
        break;
      default:
        // Handle any other cases here
        break;
    }
  }, [pathname]);

  return {
    isHomeActive,
    isBuyingActive,
    isFindActive,
    isLoveActive,
  };
};

export default useBottomNavigation;
