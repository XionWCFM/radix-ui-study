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
      <div className=" w-full flex justify-center flex-wrap overflow-hidden">
        <div className=" flex gap-x-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
            <li
              key={item}
              className=" list-none rounded-lg flex h-[200px] w-[200px] bg-primary-100"
            >
              아이템
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoOffset;
