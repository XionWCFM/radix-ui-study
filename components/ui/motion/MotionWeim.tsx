import ButtonAtom from "@/components/system/atom/button-atom";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface MotionWeimProps {}

const MotionWeim = ({}: MotionWeimProps) => {
  return (
    <AnimatePresence>
      (
      <motion.div
        className=" w-[100px] h-[100px] fixed bottom-0 left-0 right-0 mx-auto bg-primary-100 "
        exit={{ y: [0, 100] }}
        key="box"
        initial={{
          y: 0,
        }}
        animate={{
          y: [100, 0],
        }}
        transition={{
          duration: 0.4,
        }}
      ></motion.div>
      )
    </AnimatePresence>
  );
};

export default MotionWeim;
