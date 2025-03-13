import { z } from "zod";

export const HeaderStoreSchema = z.object({
  titleRef: z.instanceof(HTMLDivElement).optional(),
  setTitleRef: z.function().args(z.instanceof(HTMLDivElement)).returns(z.void()),
  menuItemsRef: z.array(z.instanceof(HTMLDivElement).nullable()).optional(),
  setMenuItemsRef: z.function().args(z.array(z.instanceof(HTMLDivElement).nullable())).returns(z.void()),
});

export type HeaderStore = z.infer<typeof HeaderStoreSchema>;
