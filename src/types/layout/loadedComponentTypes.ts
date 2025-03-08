import { z } from "zod";

export const LoadedComponentSchema = z.object({
  loaded: z.boolean().optional().default(false),
});

export type LoadedComponentProps = z.infer<typeof LoadedComponentSchema>;
