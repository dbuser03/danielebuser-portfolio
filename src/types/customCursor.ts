import { z } from "zod";

export const PositionSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export type Position = z.infer<typeof PositionSchema>;

export const createPosition = (x: number, y: number): Position => {
  return PositionSchema.parse({ x, y });
};