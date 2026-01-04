import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground",
        "flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base md:text-sm",
        "border border-border", 
        "outline-none transition-colors",
        "focus-visible:border-blue",
        "aria-invalid:border-red",
        "dark:bg-input/30",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
