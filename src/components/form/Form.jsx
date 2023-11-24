import React, { useState, useContext } from "react";

import { motion } from "framer-motion";

import { MdClose } from "react-icons/md";

import { NotificationContext } from "../../context/NotificationContext";
import { TaskContext } from "../../context/TaskContext";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Form = ({ toggleFormOff }) => {
  const [date, setDate] = useState("");
  const [taskText, setTaskText] = useState("");

  const { showNotification } = useContext(NotificationContext);
  const { add } = useContext(TaskContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!date || !taskText) {
      return;
    }

    const task = {
      text: taskText,
      deadline: date,
    };

    try {
      add(task);

      showNotification({
        message: "Task saved successfully.",
        title: "Yayy!",
        status: "success",
      });

      setTaskText("");
      setDate("");
    } catch (error) {
      showNotification({
        message: "Something wen wrong.",
        title: "Oops!",
        status: "error",
      });
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 bottom-0 right-0 bg-white bg-opacity-90 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.form
        className="w-10/12 md:w-1/4 bg-white shadow-lg p-4 rounded-md flex items-center justify-start flex-col"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -300, opacity: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.3,
        }}
        onSubmit={formSubmitHandler}
      >
        <div className="w-full mb-4 flex items-center justify-end">
          <button
            onClick={(e) => {
              e.preventDefault();

              toggleFormOff(false);
            }}
          >
            <MdClose fontSize={24} className="text-indigo-400" />
          </button>
        </div>
        <div className="w-full mb-3 flex items-start justify-start flex-col">
          <label htmlFor="task" className="font-medium text-indigo-400">
            Task:
          </label>
          <textarea
            name="task"
            id="task"
            className="resize-none w-full border rounded-md h-24 outline-none p-2"
            placeholder="What do you need to do?"
            onChange={(e) => setTaskText(e.target.value)}
            value={taskText}
          ></textarea>
        </div>
        <div className="w-full mb-3 flex items-start justify-start flex-col">
          <label htmlFor="task" className="font-medium text-indigo-400">
            Needs to be done until?
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-full">
          <button className="w-full p-3 rounded-md bg-indigo-400 text-white font-medium uppercase transition hover:bg-indigo-300">
            SAVE
          </button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Form;
