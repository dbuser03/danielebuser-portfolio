import { z } from 'zod';

export const LoadingProgressResultSchema = z.object({
  isLoaded: z.boolean(),
  setIsLoaded: z.function()
    .args(z.union([
      z.boolean(),
      z.function().args(z.boolean()).returns(z.boolean())
    ]))
    .returns(z.void()),
  counter: z.number(),
  pageNumber: z.string(),
});

export type LoadingProgressResult = z.infer<typeof LoadingProgressResultSchema>;