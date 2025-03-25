import { z } from "zod";

export const ColumnGridSchema = z.object({
  columnCount: z.number().optional(),
  showBorder: z.boolean().optional().default(false),
  opacity: z.number().optional().default(1),
  className: z.string().optional().default(""),
});

export type ColumnGridProps = z.infer<typeof ColumnGridSchema>;
