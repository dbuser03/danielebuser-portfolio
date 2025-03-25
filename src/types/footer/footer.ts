import { DEFAULT_CITY, DEFAULT_COORDINATES, DEFAULT_IS_LOADING, DEFAULT_PAGE_NUMBER, DEFAULT_TIME } from "@/constants/footer/footer";
import { z } from "zod";

export const CityInfoPropsSchema = z.object({
  preventCityAnimation: z.boolean(),
  preventCoordinatesAnimation: z.boolean(),
  preventTimeAnimation: z.boolean(),
  city: z.string(),
  time: z.string(),
  coordinates: z.string(),
});

export type CityInfoProps = z.infer<typeof CityInfoPropsSchema>;

export const PageNumberPropsSchema = z.object({
  preventPageNumberAnimation: z.boolean(),
  pageNumber: z.string(),
  isLoading: z.boolean(),
  fadeOut: z.boolean().optional().default(false),
});

export type PageNumberProps = z.infer<typeof PageNumberPropsSchema>;

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

export const LoadingProgressOptionsSchema = z.object({
  duration: z.number().optional().default(1500),
  isLoading: z.boolean(),
});

export type LoadingProgressOptions = z.infer<typeof LoadingProgressOptionsSchema>;
