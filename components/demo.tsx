"use client";
import useOffset from "@/hooks/ui-hooks/use-offset";
import React, { useRef } from "react";

interface demoProps {}

const DemoOffset = ({}: demoProps) => {
  const { ref, width, height } = useOffset();
  console.log(width, height);
  return (
    <div>
      <div ref={ref} className=" h-[100px] w-[100px]"></div>
    </div>
  );
};

export default DemoOffset;
