import { z } from 'zod';

export const DeviceDetectionSchema = z.object({
  isMobile: z.boolean(),
  isTablet: z.boolean(),
  isDesktop: z.boolean(),
  isTouchDevice: z.boolean(),
});

export type DeviceDetection = z.infer<typeof DeviceDetectionSchema>;