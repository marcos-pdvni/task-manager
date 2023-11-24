import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { MdCheck, MdDeleteOutline } from "react-icons/md";

const TodoItem = ({ todo }) => {
  const [isControllerActive, setIsControllerActive] = useState(false);

  return (
    <motion.li
      className="flex items-center justify-start flex-col border rounded-md max-h-52 h-full relative overflow-hidden"
      onMouseEnter={() => setIsControllerActive(true)}
      onMouseLeave={() => setIsControllerActive(false)}
    >
      <div className="w-full grow-[3] break-words flex items-start justify-start text-start leading-relaxed mb-auto flex-col p-3">
        {todo.text}
      </div>
      <div className="w-full flex items-start justify-end flex-col text-slate-400 p-3">
        {new Date(todo.deadline).toLocaleDateString("pt-BR", {
          timeZone: "GMT",
        })}
      </div>
      <AnimatePresence>
        {isControllerActive && (
          <motion.div
            className="w-1/4 absolute h-full right-0 flex items-center justify-start flex-col bg-white border-s"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x: 300,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <button className="w-full outline-none border-none  text-green-400 flex items-center justify-center grow-[1]">
              <MdCheck fontSize={24} />
            </button>
            <button className="w-full outline-none border-none  text-red-400 flex items-center justify-center grow-[1]">
              <MdDeleteOutline fontSize={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export default TodoItem;
