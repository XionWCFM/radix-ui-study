"use client";
import ButtonAtom from "@/components/system/atom/button-atom";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface MotionProps {}

const Motion = ({}: MotionProps) => {
  const [h, setH] = useState(false);
  return (
    <AnimatePresence>
      <ButtonAtom className="" onClick={() => setH((state) => !state)}>
        클릭하세요
      </ButtonAtom>
      {h && (
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
      )}
    </AnimatePresence>
  );
};

export default Motion;
