import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/cn";
import React, { ComponentPropsWithRef, Ref } from "react";

const TextVariants = cva(``, {
  variants: {
    variant: {
      default: "",
      "gray-400": "text-gray-400",
      "gray-500": "text-gray-500",
      "primary-100": " text-primary-100",
      "primary-60": "text-primary-60",
      "neutral-100": "text-neutral-100",
      "box-primary": `py-[10px] px-[20px] text-primary-100 bg-primary-10 rounded-[10px]`,
      "box-secondary": `py-[10px] px-[20px]  text-gray-500 bg-gray-100 rounded-[10px]`,
      white: " text-white",
    },
    fontWeight: {
      default: "",
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    underline: {
      "non-active": "",
      active: " underline underline-offset-[3px]",
    },
  },
  defaultVariants: {
    underline: "non-active",
    fontWeight: "default",
    variant: "default",
  },
});

interface TextAtomProps
  extends ComponentPropsWithRef<"p">,
    VariantProps<typeof TextVariants> {
  className?: string;
  htmlTag?: "span" | "p";
}

const TextAtom = (
  {
    children,
    className,
    htmlTag = "p",
    variant,
    underline,
    fontWeight,
    ...attributes
  }: TextAtomProps,
  ref: Ref<HTMLParagraphElement>,
) => {
  switch (htmlTag) {
    case "p":
      return (
        <p
          className={cn(
            TextVariants({ variant, underline, fontWeight }),
            className,
          )}
          ref={ref}
          {...attributes}
        >
          {children}
        </p>
      );
    case "span":
      return (
        <span
          className={cn(
            TextVariants({ variant, underline, fontWeight }),
            className,
          )}
          ref={ref}
          {...attributes}
        >
          {children}
        </span>
      );
    default:
      throw new Error("textAtom case error");
  }
};

export default TextAtom;
