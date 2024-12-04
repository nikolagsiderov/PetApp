"use client";

import React, { useState, useEffect } from "react";
import {
  FiBarChart,
  FiBell,
  FiHome,
  FiSettings,
  FiLayout,
} from "react-icons/fi";
import SidebarOption from "./SidebarOption";
import SidebarTitleSection from "./SidebarTitleSection";
import SidebarToggleClose from "./SidebarToggleClose";
import SidebarReturn from "./SidebarReturn";

const Sidebar = ({ username }: { username: string | null | undefined }) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Начало");

  const handleScreenSizeChange = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSizeChange);
    return () => {
      window.removeEventListener("resize", handleScreenSizeChange);
    };
  }, []);

  const isMobile = screenWidth <= 768;

  useEffect(() => {
    if (isMobile) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMobile]);

  return (
    <nav
      className="fixed h-screen left-0 z-10 shrink-0 border-r border-slate-300 bg-white p-2 drop-shadow-xl"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <SidebarTitleSection open={open} username={username} />

      <div className="space-y-1">
        <SidebarOption
          Icon={FiHome}
          title="Начало"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiBell}
          title="Чакащи заявки"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <SidebarOption
          Icon={FiLayout}
          title="Моята обява"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiBarChart}
          title="Статистика"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <SidebarOption
          Icon={FiSettings}
          title="Настройки"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <SidebarReturn open={open} />
      <SidebarToggleClose open={open} setOpen={setOpen} />
    </nav>
  );
};

export default Sidebar;
