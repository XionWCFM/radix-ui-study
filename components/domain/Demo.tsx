"use client";
import { useAddToastAction } from "@/store/toast-store";
import React from "react";
import ButtonAtom from "../system/atom/button-atom";

interface DemoProps {}

const Demo = ({}: DemoProps) => {
  const addToast = useAddToastAction();

  return (
    <div>
      <ButtonAtom
        onClick={() => {
          addToast({
            content: "엄준식은",
          });
        }}
      >
        눌러봐요
      </ButtonAtom>
    </div>
  );
};

export default Demo;
