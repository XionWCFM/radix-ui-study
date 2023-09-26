"use client";
import ButtonAtom from "@/components/system/atom/button-atom";
import * as Toast from "@radix-ui/react-toast";
import React, { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getArea } from "@/util/get-area";
interface ToastDemoProps {}

const ToastDemo = ({}: ToastDemoProps) => {
  const [open, setOpen] = React.useState(false);
  const timeRef = useRef<NodeJS.Timeout | number>(0);
  const handler = () => {
    setOpen((state) => !state);
    window.clearTimeout(timeRef.current);
    timeRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 100);
  };
  const ab = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    console.log(getArea(ab));
    return () => clearTimeout(timeRef.current);
  });

  return (
    <Toast.Provider swipeDirection="down" duration={1000}>
      <div className="">하이염</div>
      <ButtonAtom onClick={handler}>토스트버튼</ButtonAtom>
      <Toast.Root
        className="ToastRoot"
        forceMount
        asChild
        open={open}
        onOpenChange={setOpen}
      >
        <div className="">
          <AnimatePresence>
            {open && (
              <motion.div
                className={`w-[100px] h-[100px] bg-primary-100`}
                exit={{ y: [0, 100] }}
                key={"ㅇㅁㄴ"}
                initial={{
                  y: 0,
                }}
                animate={{
                  y: [100, 0],
                }}
                transition={{
                  duration: 0.2,
                }}
                ref={ab}
              >
                <div className=""></div>
                <Toast.Close>안녕히가세요</Toast.Close>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 left-0 right-0 mx-auto flex flex-col  gap-[10px] w-[100px]  max-w-[100vw]   z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

export default ToastDemo;
