import { DEFAULT_CITY, DEFAULT_COORDINATES, DEFAULT_IS_LOADING, DEFAULT_PAGE_NUMBER, DEFAULT_TIME } from "@/constants/footer/footer";
import { z } from "zod";

export const FooterPropsSchema = z.object({
  preventCityAnimation: z.boolean().optional().default(false),
  preventCoordinatesAnimation: z.boolean().optional().default(false),
  preventTimeAnimation: z.boolean().optional().default(false),
  preventPageNumberAnimation: z.boolean().optional().default(false),
  isLoading: z.boolean().optional().default(DEFAULT_IS_LOADING),
  city: z.string().optional().default(DEFAULT_CITY),
  coordinates: z.string().optional().default(DEFAULT_COORDINATES),
  time: z.string().optional().default(DEFAULT_TIME),
  pageNumber: z.string().optional().default(DEFAULT_PAGE_NUMBER),
  fadeOut: z.boolean().optional().default(false),
});

export type FooterProps = z.infer<typeof FooterPropsSchema>;
