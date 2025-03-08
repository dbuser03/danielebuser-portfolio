import { z } from "zod";

export const CursorPositionSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export type Position = z.infer<typeof CursorPositionSchema>;

export const CursorDotSchema = z.object({
  position: CursorPositionSchema,
  rotation: z.number(),
  isClickLabel: z.boolean().optional(),
  isHoveringTitle: z.boolean().optional(),
  label: z.string().optional(),
});

export type CursorDotProps = z.infer<typeof CursorDotSchema>;

export const CursorLabelSchema = z.object({
  position: CursorPositionSchema,
  label: z.string(),
  isHoveringTitle: z.boolean().optional(),
});

export type CursorLabelProps = z.infer<typeof CursorLabelSchema>;

export const CustomCursorPropsSchema = z.object({
  label: z.string().optional(),
});

export type CustomCursorProps = z.infer<typeof CustomCursorPropsSchema>;