import { RefObject } from "react";

export const getArea = (ref: RefObject<HTMLDivElement> | null) => {
  return {
    width: ref?.current?.offsetWidth ?? 0,
    height: ref?.current?.offsetHeight ?? 0,
  };
};
