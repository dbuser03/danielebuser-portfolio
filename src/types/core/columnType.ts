import { z } from "zod";

export const ColumnGridSchema = z.object({
  columnCount: z
    .number()
    .int()
    .min(4)
    .max(12),
  showBorder: z.boolean().optional().default(false),
  opacity: z.number().min(0).max(1).optional().default(0.1),
  className: z.string().optional(),
});

export type ColumnGridProps = z.infer<typeof ColumnGridSchema>;