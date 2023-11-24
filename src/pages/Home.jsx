import React, { useState } from "react";

import AddTask from "../components/add/AddTask";
import TodoList from "../components/todos/TodoList";
import Form from "../components/form/Form";

import { AnimatePresence } from "framer-motion";

const Home = () => {
  const [isFormActive, setIsFormActive] = useState(false);

  return (
    <>
      <div className="w-11/12 h-screen overflow-hidden flex items-center justify-start flex-col p-4 pt-24">
        <h1 className="flex items-center justify-center mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-indigo-400 text-center">
          Welcome to Task Manager.
        </h1>
        <div className="w-10/12 flex items-center justify-center  mb-8 pb-8 border-b ">
          <AddTask toggleForm={setIsFormActive} />
        </div>
        <TodoList />
      </div>
      <AnimatePresence>
        {isFormActive && <Form toggleFormOff={setIsFormActive} />}
      </AnimatePresence>
    </>
  );
};

export default Home;
