"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const popoverVariants = cva(
  `
    z-50
    origin-(--radix-popover-content-transform-origin)
    rounded-md
    border
    bg-popover
    text-popover-foreground
    shadow-md
    outline-none
  `,
  {
    variants: {
      animation: {
        default: `
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
          data-[state=closed]:fade-out-0
          data-[state=open]:fade-in-0
          data-[state=closed]:zoom-out-95
          data-[state=open]:zoom-in-95
          data-[side=bottom]:slide-in-from-top-2
          data-[side=top]:slide-in-from-bottom-2
          data-[side=left]:slide-in-from-right-2
          data-[side=right]:slide-in-from-left-2
        `,
        slideRight: `
          transition-transform transition-opacity duration-300 ease-out
          data-[state=open]:translate-x-0
          data-[state=open]:opacity-100
          data-[state=closed]:translate-x-full
          data-[state=closed]:opacity-0
        `,
      },
    },
    defaultVariants: {
      animation: "default",
    },
  }
);

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  animation,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content> &
  VariantProps<typeof popoverVariants>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverVariants({ animation }), className)}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
