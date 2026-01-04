"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer size-4 shrink-0 rounded-[4px] border border-border bg-background outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      color: {
        blue:
          "data-[state=checked]:bg-blue data-[state=checked]:border-blue data-[state=checked]:text-white",
        green:
          "data-[state=checked]:bg-green data-[state=checked]:border-green data-[state=checked]:text-white",
      },
    },
    defaultVariants: {
      color: "blue",
    },
  }
);

function Checkbox({
  className,
  color,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> &
  VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ color }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
