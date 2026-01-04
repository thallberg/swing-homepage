import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
        "h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base md:text-sm",
        "outline-none transition-colors",
        "border border-border",
        "focus-visible:border-blue", 
        "aria-invalid:border-red", 
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-input/30",
        className
      )}
      {...props}
    />
  );
}

export { Input };
