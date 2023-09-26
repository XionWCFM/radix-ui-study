import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/cn";
import React, { ComponentPropsWithoutRef, Ref } from "react";

const StrongVariants = cva(``, {
  variants: {
    variant: {
      bold: "",
      underline: "underline underline-offset-[0.5px] font-bold",
      primary: ` text-primary-100`,
    },
  },
  defaultVariants: {
    variant: "bold",
  },
});

interface StrongAtomProps
  extends ComponentPropsWithoutRef<"strong">,
    VariantProps<typeof StrongVariants> {
  className?: string;
}

const StrongAtom = (
  { children, className, variant }: StrongAtomProps,
  ref: Ref<HTMLElement>,
) => {
  return (
    <strong ref={ref} className={cn(StrongVariants({ variant }), className)}>
      {children}
    </strong>
  );
};

export default React.forwardRef(StrongAtom);
