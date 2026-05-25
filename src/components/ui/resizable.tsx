"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "./utils";

// PANEL GROUP
function ResizablePanelGroup({
  className,
  children,
  direction = "horizontal",
}: React.ComponentProps<"div"> & {
  direction?: "horizontal" | "vertical";
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full",
        direction === "vertical" && "flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

// PANEL
function ResizablePanel({
  className,
  children,
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex-1 overflow-auto", className)}>
      {children}
    </div>
  );
}

// HANDLE (visual apenas)
function ResizableHandle({
  withHandle,
  className,
}: {
  withHandle?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-border relative flex w-1 items-center justify-center",
        className
      )}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </div>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };