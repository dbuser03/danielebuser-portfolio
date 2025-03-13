import { z } from "zod";

export const FooterStoreSchema = z.object({
  pageNumberRef: z.instanceof(HTMLDivElement).nullable(),
  locationRef: z.instanceof(HTMLDivElement).nullable(),
  setPageNumberRef: z.function().args(z.instanceof(HTMLDivElement).nullable()).returns(z.void()),
  setLocationRef: z.function().args(z.instanceof(HTMLDivElement).nullable()).returns(z.void()),
});

export type FooterStore = z.infer<typeof FooterStoreSchema>;
