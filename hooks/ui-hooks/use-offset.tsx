"use client";
import React, { useRef, useState } from "react";

const useOffset = () => {
  const ref = useRef<HTMLDivElement | HTMLParagraphElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  React.useEffect(() => {
    if (ref) {
      if (ref.current?.offsetHeight !== undefined) {
        setHeight(ref.current.offsetHeight);
        setWidth(ref.current.offsetWidth);
      }
    }
  }, [width, height]);
  return {
    ref,
    width,
    height,
  };
};

export default useOffset;
