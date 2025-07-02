import { z } from 'zod';
import { ReactNode } from 'react';

export const ScrollContextProps = z.object({
  children: z.any().refine((val): val is ReactNode => true)
});

export type ScrollContextProps = z.infer<typeof ScrollContextProps>;