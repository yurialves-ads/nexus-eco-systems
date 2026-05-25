"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

import { useIsMobile } from "./use-mobile";
import { cn } from "./utils";
import { Button } from "./button";
import { SidebarContext } from "./use-sidebar";

/* ================= PROVIDER ================= */

export function SidebarProvider({
  defaultOpen = true,
  children,
}: {
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(defaultOpen);

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const state = open ? "expanded" : "collapsed";

  return (
    <SidebarContext.Provider
      value={{ state, open, setOpen, isMobile, toggleSidebar }}
    >
      <div className="flex min-h-screen w-full">{children}</div>
    </SidebarContext.Provider>
  );
}

/* ================= SIDEBAR ================= */

export function Sidebar({
  className,
  children,
}: React.ComponentProps<"div">) {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("Sidebar must be used inside provider");

  const { state } = context;

  return (
    <aside
      data-state={state}
      className={cn(
        "bg-sidebar text-sidebar-foreground h-full transition-all duration-200",
        state === "collapsed" ? "w-12" : "w-64",
        className
      )}
    >
      {children}
    </aside>
  );
}

/* ================= TRIGGER ================= */

export function SidebarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof Button>) {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("SidebarTrigger must be inside provider");

  const { toggleSidebar } = context;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className={cn("size-8", className)}
      {...props}
    >
      <PanelLeftIcon />
    </Button>
  );
}

/* ================= MENU BUTTON ================= */

const sidebarMenuButtonVariants = cva(
  "flex w-full items-center gap-2 rounded-md p-2 text-sm hover:bg-accent transition-colors",
  {
    variants: {
      size: {
        default: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export function SidebarMenuButton({
  asChild = false,
  className,
  size,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof sidebarMenuButtonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(sidebarMenuButtonVariants({ size }), className)}
      {...props}
    />
  );
}