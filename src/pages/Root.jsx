import React, { useState, useEffect } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";

import { AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";

const Root = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <>
      <Navbar
        toggleSidebar={setIsSidebarActive}
        sidebarActive={isSidebarActive}
      />
      <main className="w-full min-h-screen flex items-center justify-start">
        <Sidebar />
        <AnimatePresence>
          {isSidebarActive && <MobileSidebar isActive={isSidebarActive} />}
        </AnimatePresence>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
