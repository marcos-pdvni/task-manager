import React from "react";

import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

const Navbar = ({ toggleSidebar, sidebarActive }) => {
  return (
    <div className="w-full flex items-center justify-between fixed top-0 z-50 border-b bg-white">
      <div>
        <Link
          to={"/"}
          className="py-2 px-4 flex items-center justify-center border-r antialiased tracking-tighter text-indigo-400 transition hover:bg-slate-100"
        >
          <MdHome fontSize={24} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
