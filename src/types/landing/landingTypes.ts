import { z } from "zod";

export const LandingScreenSchema = z.object({
  readyForClick: z.boolean(),
  hideLabel: z.boolean(),
});

export type LandingScreenProps = z.infer<typeof LandingScreenSchema>;