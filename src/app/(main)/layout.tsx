"use client";

import React, { useState } from "react";

import MobileNavbar from "@/src/app/(main)/_components/mobile-navbar";
import Navbar from "@/src/app/(main)/_components/navbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-50">
      <Navbar setOpenMobileSidebar={setOpenMobileSidebar} />
      <MobileNavbar
        setOpenMobileSidebar={setOpenMobileSidebar}
        openMobileSidebar={openMobileSidebar}
      />
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
