import React from "react";

import { motion } from "framer-motion";

import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const Notification = ({ title, message, status }) => {
  return (
    <motion.div
      className="fixed top-3 left-3 w-11/12 mx-auto md:w-1/4 h-auto z-50 bg-white"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
    >
      <Alert variant={status === "error" ? "destructive" : ""}>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </motion.div>
  );
};

export default Notification;
