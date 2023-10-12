"use client";
import { useAddToastAction } from "@/store/toast-store";
import React from "react";
import ButtonAtom from "../system/atom/button-atom";
import useToast from "@/hooks/ui-hooks/use-toast";
import { motion } from "framer-motion";

interface DemoProps {}

const Demo = ({}: DemoProps) => {
  const toast = useToast();

  return (
    <div>
      <ButtonAtom
        onClick={() => {
          toast({ content: "dsads" });
        }}
      >
        눌러봐요
      </ButtonAtom>
      <motion.div
        className=" bg-primary-100 h-[100px] w-[100px] ml-20"
        animate={{
          translateY: ["100%", "0%", "100%"],
        }}
      />
    </div>
  );
};

export default Demo;
