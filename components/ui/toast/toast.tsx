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
        exit={{ y: [0, 100], opacity: 0 }}
        key={id}
        initial={{
          y: 0,
        }}
        animate={{
          y: [100, 0],
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <ToastPrimitive.Description>{content}</ToastPrimitive.Description>
        <ToastPrimitive.Close>안녕히가세요</ToastPrimitive.Close>
      </motion.div>
    </ToastPrimitive.Root>
  );
};

export default Toast;
