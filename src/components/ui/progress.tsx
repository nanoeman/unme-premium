"use client";

import { cn } from "@/lib/utils";

interface ProgressProps {
  value?: number;
  className?: string;
}

function Progress({ className, value = 0 }: ProgressProps) {
  return (
    <div
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-taupe-100",
        className
      )}
    >
      <div
        className="h-full bg-forest-600 transition-all duration-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export { Progress };
