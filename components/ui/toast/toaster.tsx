"use client";
import * as ToastPrimitive from "@radix-ui/react-toast";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getArea } from "@/util/get-area";
import { useDeleteToastAction, useToastState } from "@/store/toast-store";
import Toast from "./toast";
interface ToasterProps {}

const Toaster = ({}: ToasterProps) => {
  const toastState = useToastState();
  const deleteToast = useDeleteToastAction();
  return (
    <ToastPrimitive.Provider swipeDirection="down" duration={1000}>
      <AnimatePresence>
        {toastState.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
      <ToastPrimitive.Viewport className="fixed bottom-0 left-0 right-0 mx-auto flex flex-col  gap-[10px] w-[100px]  max-w-[100vw]   z-[2147483647] outline-none" />
    </ToastPrimitive.Provider>
  );
};

export default Toaster;
