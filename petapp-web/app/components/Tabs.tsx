"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export type TabItem = {
  buttonTitle: string;
  content: ReactNode;
};

interface TabsProps {
  items: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    firstBtnRef.current?.focus();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-y-4 w-full">
        <div className="bg-white rounded-full flex justify-between items-center gap-x-1 font-light text-neutral-800">
          {items.map((item: any, index: number) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className={`outline-none focus:outline-none w-full p-4 hover:bg-neutral-100 rounded-full text-center focus:ring-0 ${
                selectedTab === index ? "font-bold" : ""
              } `}
            >
              {item.buttonTitle}
            </button>
          ))}
        </div>

        <div className="p-2 rounded-xl">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
