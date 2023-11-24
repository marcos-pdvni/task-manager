import React, { useContext } from "react";

import { TaskContext } from "../../context/TaskContext";

import SadImage from "../../assets/undraw_feeling_blue_-4-b7q.svg";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <ul className="w-full h-full grid grid-cols-1 md:grid-cols-4 overflow-y-auto p-4 gap-3">
        {tasks.length >= 1 &&
          tasks.map((task, idx) => <TodoItem todo={task} key={idx} />)}

        {tasks.length < 1 && (
          <div className="w-full flex items-center justify-center flex-col">
            <div className="w-full relative mb-4 flex items-center justify-center">
              <img
                src={SadImage}
                alt="sad face"
                className="w-1/2 md:w-1/3 h-auto"
              />
            </div>
            <div className="font-medium text-xl mt-3">No tasks.</div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
