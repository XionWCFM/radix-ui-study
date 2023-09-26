// Heading 컴포넌트는 SEO를 위해 H태그를 사용합니다.
// 이에 따라
import React, { ComponentPropsWithoutRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/util/cn";
const HeadingVariants = cva(``, {
  variants: {
    variant: {
      default: "",
      "neutral-100": `text-neutral-100`,
      "gray-500": ` text-gray-500`,
      "gray-400": ` text-gray-400`,
      "primary-60": `text-primary-60`,
      "primary-100": `text-primary-100`,
    },
    fontWeight: {
      default: "",
      regular: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
  },
  defaultVariants: {
    variant: "default",
    fontWeight: "default",
  },
});

interface HeadingAtomProps
  extends ComponentPropsWithoutRef<"h2">,
    VariantProps<typeof HeadingVariants> {
  h?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const HeadingAtom = ({
  h = 2,
  children,
  variant,
  className,
  fontWeight,
  ...attributes
}: HeadingAtomProps) => {
  switch (h) {
    case 1: {
      return (
        <h1
          className={cn(HeadingVariants({ variant, fontWeight }), className)}
          {...attributes}
        >
          {children}
        </h1>
      );
    }
    case 1: {
      return (
        <h1
          className={cn(HeadingVariants({ variant, fontWeight }), className)}
          {...attributes}
        >
          {children}
        </h1>
      );
    }
    case 2: {
      return (
        <h2
          className={cn(HeadingVariants({ variant, fontWeight }), className)}
          {...attributes}
        >
          {children}
        </h2>
      );
    }
    case 3: {
      return (
        <h3
          className={cn(HeadingVariants({ variant, fontWeight }), className)}
          {...attributes}
        >
          {children}
        </h3>
      );
    }
    case 4: {
      return (
        <h4
          className={cn(HeadingVariants({ variant, fontWeight }), className)}
          {...attributes}
        >
          {children}
        </h4>
      );
    }
    case 5: {
      return (
        <h5
          className={cn(HeadingVariants({ variant, fontWeight }), className)}
          {...attributes}
        >
          {children}
        </h5>
      );
    }
    case 6: {
      return (
        <h6
          className={cn(HeadingVariants({ variant }), className)}
          {...attributes}
        >
          {children}
        </h6>
      );
    }
    default:
      throw new Error("h tag case error");
  }
};

export default HeadingAtom;
