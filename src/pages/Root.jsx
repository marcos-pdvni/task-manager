import React, { useState, useContext } from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import Notification from "../components/notification/Notification";

import { AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";

import { NotificationContext } from "../context/NotificationContext";

const Root = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { notification } = useContext(NotificationContext);

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
      <AnimatePresence>
        {notification && (
          <Notification
            title={notification.title}
            message={notification.message}
            status={notification.status}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Root;
