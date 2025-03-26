import { BreakpointsSchema, ColumnsByBreakpointSchema } from '@/types/breakpoint';

export const BREAKPOINTS = BreakpointsSchema.parse({
  xl: 1280,
  lg: 1024,
  md: 768,
  sm: 640,
  xs: 0
});

export const COLUMNS_BY_BREAKPOINT = ColumnsByBreakpointSchema.parse({
  xl: 12,
  lg: 10,
  md: 8,
  sm: 6,
  default: 4
});

export const LARGE_SCREEN_WIDTH = '64vw';

export const GRID_STYLES = {
  CONTAINER: [
    "pointer-events-none",
    "absolute inset-0",
    "-z-1",
    "grid h-full w-full",
    "grid-cols-1",
    "gap-x-4 px-4 md:px-6",
  ].join(" "),
  COLUMN: {
    BASE: "h-full bg-[var(--columns)]",
    BORDER: "border border-[var(--foreground)]",
  },
};