import { z } from "zod";
import { DEFAULT_MAX_COLUMNS } from "@/constants/columns/columns";

export const ColumnsProps = z.object({
  maxColumns: z.number().optional().default(DEFAULT_MAX_COLUMNS),
  alternative: z.boolean().optional().default(false),
});

export type ColumnsProps = z.infer<typeof ColumnsProps>;
