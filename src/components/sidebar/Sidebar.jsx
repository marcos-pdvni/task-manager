import React from "react";

import { navLinks } from "../../lib/utils";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="w-1/4 border-r hidden md:flex items-center justify-start flex-col p-4 h-screen overflow-hidden pt-14">
      <motion.ul
        className="w-full flex items-center justify-start flex-col gap-y-3"
        layout
      >
        <AnimatePresence>
          {navLinks.length &&
            navLinks.map((l) => {
              const Icon = l.icon;

              return (
                <motion.li
                  key={l.name}
                  className="w-full h-12 flex items-center justify-center relative overflow-hidden"
                >
                  <Link
                    to={l.path}
                    className="w-full h-full flex items-center justify-start border rounded-md uppercase font-medium p-3"
                  >
                    <span className="mx-3 text-indigo-400">
                      <Icon fontSize={24} />
                    </span>
                    <span>{l.name}</span>
                  </Link>
                  {pathname === l.path && (
                    <motion.div
                      className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-slate-100"
                      layoutId="nav-link"
                      transition={{
                        duration: 0.2,
                        ease: "linear",
                      }}
                    ></motion.div>
                  )}
                </motion.li>
              );
            })}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
};

export default Sidebar;
