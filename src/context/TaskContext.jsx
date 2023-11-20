import React, { useEffect, createContext, useState } from "react";

export const TaskContext = createContext({
  tasks: [],
  add(task) {},
  deleSingleOne(taskId) {},
  removeAll() {},
});

const TaskProvider = ({ children }) => {
  const [currTasks, setCurrTasks] = useState([]);

  const addHandler = (task) => {
    setCurrTasks([...currTasks, task]);
  };

  const deleteSingleOneHandler = (taskId) => {
    const filteredTasks = currTasks.filter((task) => task.id !== taskId);
    setCurrTasks(filteredTasks);
  };

  const removeallHandler = () => {
    setCurrTasks([]);
  };

  useEffect(() => {
    // get array of tasks from localStorage
    const tasks = localStorage.getItem("tmn-tasks");

    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      if (Array.isArray(parsedTasks)) {
        setCurrTasks(parsedTasks);
      }
    }
  }, []);

  useEffect(() => {
    if (currTasks.length >= 1) {
      const tasksJSON = JSON.stringify(currTasks);
      localStorage.setItem("tmn-tasks", tasksJSON);
    }
  }, [currTasks]);

  const context = {
    tasks: currTasks,
    add: addHandler,
    deleSingleOne: deleteSingleOneHandler,
    removeAll: removeallHandler,
  };

  return (
    <TaskContext.Provider value={context}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
