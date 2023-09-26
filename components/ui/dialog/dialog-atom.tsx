"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/cn";

const DialogAtomVariants = cva(
  `
fixed w-full  z-40 data-[state=open]:animate-overlayShow
`,
  {
    variants: {
      h: {
        default: " h-[]",
      },
      bg: {
        default: "",
        white: " bg-white",
      },
      direction: {
        default: "bottom-0 right-0",
      },
      rounded: {
        default: "",
        tsm: "rounded-t-[20px]",
      },
    },
    defaultVariants: {
      h: "default",
      direction: "default",
      bg: "white",
      rounded: "tsm",
    },
  },
);

interface DialogAtomProps extends VariantProps<typeof DialogAtomVariants> {
  content?: React.ReactNode;
  trigger?: React.ReactNode;
}

const DialogAtom = ({ content, trigger, h }: DialogAtomProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" data-[state=open]:animate-overlayShow z-30 fixed ba bg-neutral-60 backdrop-blur inset-0"></Dialog.Overlay>
        <Dialog.Content className={cn(DialogAtomVariants({ h }))}>
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogAtom;
