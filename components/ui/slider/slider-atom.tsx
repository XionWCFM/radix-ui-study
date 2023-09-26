"use client";
import React, { ChangeEvent } from "react";
import * as Slider from "@radix-ui/react-slider";
import { cn } from "@/util/cn";
import TextAtom from "@/components/system/atom/text-atom";

const SliderAtom = () => {
  const [roundedStyle, setRoundedStyle] = React.useState(false);
  const [isShowText, setIsShowText] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  const roundedStyleHandler = (event: ChangeEvent<HTMLFormElement>) => {
    const value = Number(event.target.value as number);
    setRoundedStyle((state) => value > 55);
  };

  const isShowTextHandler = (event: ChangeEvent<HTMLFormElement>) => {
    const value = Number(event.target.value as number);
    setIsShowText((state) => value > 15);
  };

  const formHandler = (event: ChangeEvent<HTMLFormElement>) => {
    roundedStyleHandler(event);
    isShowTextHandler(event);
  };

  return (
    <form
      className={cn(
        `bg-primary-10 rounded-full overflow-hidden ${
          isComplete ? "w-[300px]" : ""
        }`,
      )}
      onChange={formHandler}
    >
      <Slider.Root
        className=" relative flex items-center justify-center select-none touch-none "
        defaultValue={[0]}
        max={100}
        step={1}
      >
        <TextAtom
          className=" absolute"
          variant={"primary-100"}
          fontWeight={"bold"}
        >
          밀어서 픽 사용하기
        </TextAtom>
        <Slider.Track className="h-[55px] relative grow">
          <Slider.Range
            className={`absolute bg-primary-100 rounded-l-full h-full overflow-hidden ${
              roundedStyle ? " rounded-r-full" : ""
            } `}
          >
            <TextAtom
              className={`flex justify-center items-center h-full transition-all duration-300 min-w-[120px] `}
              htmlTag="span"
              fontWeight={"bold"}
              variant={"white"}
            >
              결제완료!
            </TextAtom>
          </Slider.Range>
        </Slider.Track>
        <Slider.Thumb
          className=" block w-[55px] h-[55px] rounded-full focus:outline-none"
          aria-label="Volume"
        >
          <div className=" flex justify-center items-center bg-primary-100 h-full rounded-r-full">
            대
          </div>
        </Slider.Thumb>
      </Slider.Root>
    </form>
  );
};

export default SliderAtom;
