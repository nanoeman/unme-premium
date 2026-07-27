"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.HTMLAttributes<HTMLDivElement>,
  React.ComponentPropsWithoutRef<"div"> & { value?: number }
>(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-taupe-100",
      className
    )}
    {...props}
  >
    <div
      className="h-full bg-forest-600 transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
));
Progress.displayName = "Progress";

export { Progress };
