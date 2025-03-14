import { TIME_FORMAT, TIMEZONE } from "@/constants/footer";
import { z } from "zod";

const DateTimeFormatOptionsSchema = z.object({
  hour: z.enum(["numeric", "2-digit"]).optional(),
  minute: z.enum(["numeric", "2-digit"]).optional(),
  second: z.enum(["numeric", "2-digit"]).optional(),
  hour12: z.boolean().optional(),
}).passthrough();

export const UseTimezoneOptionsSchema = z.object({
  timezone: z.string().default(TIMEZONE),
  updateInterval: z.number().optional().default(60000),
  format: DateTimeFormatOptionsSchema.optional().default(TIME_FORMAT)
});

export type UseTimezoneOptions = z.infer<typeof UseTimezoneOptionsSchema>;