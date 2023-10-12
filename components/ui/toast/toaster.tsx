"use client";
import * as ToastPrimitive from "@radix-ui/react-toast";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { useToastState } from "@/store/toast-store";
import Toast from "./toast";
interface ToasterProps {}

const Toaster = ({}: ToasterProps) => {
  const toastState = useToastState();
  return (
    <ToastPrimitive.Provider swipeDirection="down" duration={1500}>
      <AnimatePresence>
        {toastState.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </AnimatePresence>
      <ToastPrimitive.Viewport className="fixed bottom-0 left-[50%] right-0 translate-x-0 flex flex-col  gap-[10px]  z-[2147483647] outline-none" />
    </ToastPrimitive.Provider>
  );
};

export default Toaster;
