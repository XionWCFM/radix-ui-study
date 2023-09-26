import { cn } from "@/util/cn";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentPropsWithRef, Ref } from "react";

const ButtonVariants = cva(
  `
 duration-200 transition-all py-4 rounded-[1.25rem]
`,
  {
    variants: {
      variant: {
        nostyle: "",
        primary: ` bg-primary-100 text-white `,
        secondary: ` bg-gray-100 text-gray-400 `,
        "secondary-focus":
          " bg-primary-10 ring-[0.25rem] ring-primary-60  text-primary-100",
        tertiary: " bg-gray-100   text-primary-100",
      },
      fontWeight: {
        regular: "font-normal",
        medium: "font-medium",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },

      "click-animation": {
        active: `active:`,
        "non-active": "",
      },
    },
    defaultVariants: {
      variant: "primary",
      fontWeight: "bold",
      "click-animation": "non-active",
    },
  },
);

interface ButtonAtomProps
  extends ComponentPropsWithRef<"button">,
    VariantProps<typeof ButtonVariants> {
  className?: string;
}

const ButtonAtom = (
  { children, className, variant, fontWeight, ...attributes }: ButtonAtomProps,
  ref: Ref<HTMLButtonElement>,
) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, fontWeight }), className)}
      ref={ref}
      {...attributes}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(ButtonAtom);
