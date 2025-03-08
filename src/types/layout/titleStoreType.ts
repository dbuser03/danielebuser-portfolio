import { z } from "zod";

export const TitleStoreSchema = z.object({
  titleRef: z.instanceof(HTMLDivElement).optional(),
  setTitleRef: z.function().args(z.instanceof(HTMLDivElement)).returns(z.void()),
});

export type TitleStore = z.infer<typeof TitleStoreSchema>;
