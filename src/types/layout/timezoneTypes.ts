import { z } from "zod";

const DateTimeFormatOptionsSchema = z.object({
  hour: z.enum(["numeric", "2-digit"]).optional(),
  minute: z.enum(["numeric", "2-digit"]).optional(),
  second: z.enum(["numeric", "2-digit"]).optional(),
  hour12: z.boolean().optional(),
}).passthrough();

export const UseTimezoneOptionsSchema = z.object({
  timezone: z.string().default("Europe/Rome"),
  updateInterval: z.number().optional().default(60000),
  format: DateTimeFormatOptionsSchema.optional().default({
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
});

export type UseTimezoneOptions = z.infer<typeof UseTimezoneOptionsSchema>;