"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// THEMES
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

// CONTAINER
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >["children"];
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

// STYLE
const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, c]) => c.theme || c.color
  );

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color =
      item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `--color-${key}: ${color};` : "";
  })
  .join("\n")}
}`
          )
          .join("\n"),
      }}
    />
  );
};

// TOOLTIP
const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  className,
}: React.ComponentProps<"div"> & {
  active?: boolean;
  payload?: unknown[];
}) {
  const { config } = useChart();

  if (!active || !Array.isArray(payload) || payload.length === 0) {
    return null;
  }

  return (
    <div className={cn("bg-background border rounded p-2 text-xs", className)}>
      {payload.map((item, index) => {
        const data = item as {
          name?: string;
          value?: number;
          dataKey?: string;
        };

        const key = data.dataKey || data.name || "value";
        const itemConfig = config[key];

        return (
          <div key={index} className="flex justify-between gap-2">
            <span>{itemConfig?.label || data.name}</span>
            <span>{data.value}</span>
          </div>
        );
      })}
    </div>
  );
}

// LEGEND
const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  className,
  payload,
}: React.ComponentProps<"div"> & {
  payload?: unknown[];
}) {
  if (!Array.isArray(payload) || payload.length === 0) return null;

  return (
    <div className={cn("flex justify-center gap-4", className)}>
      {payload.map((item, index) => {
        const data = item as {
          value?: string;
          color?: string;
        };

        return (
          <div key={index} className="flex items-center gap-1">
            <div
              className="w-2 h-2 rounded"
              style={{ backgroundColor: data.color }}
            />
            <span>{data.value}</span>
          </div>
        );
      })}
    </div>
  );
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};