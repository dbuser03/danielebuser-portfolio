import { RefObject } from "react";
import { z } from "zod";

// Position schema
export const PositionSchema = z.object({
  x: z.number(),
  y: z.number(),
});
export type Position = z.infer<typeof PositionSchema>;

export const CustomCursorPropsSchema = z.object({}).optional();
export type CustomCursorProps = z.infer<typeof CustomCursorPropsSchema>;

export const UseCustomCursorReturnSchema = z.object({
  cursorRef: z.custom<RefObject<HTMLDivElement>>((val) => 
    val !== null && typeof val === "object" && "current" in val
  ),
  isVisible: z.boolean(),
  position: PositionSchema,
});
export type UseCustomCursorReturn = z.infer<typeof UseCustomCursorReturnSchema>;

export const createPosition = (x: number, y: number): Position => {
  return PositionSchema.parse({ x, y });
};

export const createUseCustomCursorReturn = (
  cursorRef: RefObject<HTMLDivElement>,
  isVisible: boolean,
  position: Position
): UseCustomCursorReturn => {
  return UseCustomCursorReturnSchema.parse({ cursorRef, isVisible, position });
};