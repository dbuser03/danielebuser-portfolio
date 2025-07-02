import { z } from "zod";

export const CursorPositionSchema = z.object({
  x: z.number(),
  y: z.number(),
});

export const CursorContextSchema = z.object({
  position: CursorPositionSchema,
  setPosition: z.function()
    .args(z.union([CursorPositionSchema, z.function().returns(CursorPositionSchema)]))
    .returns(z.void()),
  isFirstLoad: z.boolean(),
});

export type CursorPosition = z.infer<typeof CursorPositionSchema>;
export type CursorContextType = z.infer<typeof CursorContextSchema>;
