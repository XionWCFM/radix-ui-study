"use client";
import { useAddToastAction } from "@/store/toast-store";
import React from "react";
import ButtonAtom from "../system/atom/button-atom";
import useToast from "@/hooks/ui-hooks/use-toast";

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
    </div>
  );
};

export default Demo;
