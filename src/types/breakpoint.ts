import { z } from "zod";

export const BreakpointSchema = z.enum(["default", "sm", "md", "lg", "xl"]);
export type Breakpoint = z.infer<typeof BreakpointSchema>;

export const BreakpointsSchema = z.object({
  xl: z.number(),
  lg: z.number(),
  md: z.number(),
  sm: z.number(),
  xs: z.number(),
});
export type Breakpoints = z.infer<typeof BreakpointsSchema>;

export const ColumnsByBreakpointSchema = z.object({
  xl: z.number(),
  lg: z.number(),
  md: z.number(),
  sm: z.number(),
  default: z.number(),
});
export type ColumnsByBreakpoint = z.infer<typeof ColumnsByBreakpointSchema>;

export const getBreakpointSchema = z.function()
  .args(z.number())
  .returns(BreakpointSchema);
export type GetBreakpoint = z.infer<typeof getBreakpointSchema>;