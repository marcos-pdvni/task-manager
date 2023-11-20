import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// nav links

import { MdCheckBox, MdDelete, MdCalendarMonth } from "react-icons/md";

export const navLinks = [
  {
    path: "/tasks-completed",
    name: "Completed Tasks",
    icon: MdCheckBox,
  },
  {
    path: "/tasks-deleted",
    name: "Deleted Tasks",
    icon: MdDelete,
  },
  {
    path: "/tasks-ending",
    name: "Tasks on deadline",
    icon: MdCalendarMonth,
  },
];
