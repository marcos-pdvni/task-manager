import React from "react";

import { MdPostAdd } from "react-icons/md";

import { Button } from "../ui/button";

const AddTask = ({ toggleForm }) => {
  return (
    <Button
      className="bg-indigo-400 w-10/12 md:w-1/5 hover:bg-indigo-500/60 uppercase text-md"
      onClick={() => {
        toggleForm((prev) => !prev);
      }}
    >
      <MdPostAdd fontSize={24} /> Add task
    </Button>
  );
};

export default AddTask;
