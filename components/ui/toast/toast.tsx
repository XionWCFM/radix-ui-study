"use client";
import { ToastState, useDeleteToastAction } from "@/store/toast-store";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface ToastProps extends ToastState {}

const Toast = ({ title, type, content, id, visible }: ToastProps) => {
  const deleteToast = useDeleteToastAction();
  return (
    <ToastPrimitive.Root
      asChild
      forceMount
      open={visible}
      onOpenChange={() => {
        deleteToast({ title, type, content, id, visible });
      }}
    >
      <motion.div
        className={`w-[100px] h-[100px] bg-primary-100`}
        exit={{ translateY: "100%", opacity: 0 }}
        initial={{
          translateY: "100%",
          opacity: 0,
        }}
        animate={{
          translateY: "0%",
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          type: "spring",
        }}
      >
        <ToastPrimitive.Description>{content}</ToastPrimitive.Description>
        <ToastPrimitive.Close>안녕히가세요</ToastPrimitive.Close>
      </motion.div>
    </ToastPrimitive.Root>
  );
};

export default Toast;
