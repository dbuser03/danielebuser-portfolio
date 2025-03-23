import { z } from "zod";

export const HeaderPropsSchema = z.object({
  preventNameAnimation: z.boolean().optional().default(false),
  preventMenuAnimation: z.boolean().optional().default(false),
  hideMenu: z.boolean().optional().default(false),
  clickableAuthorInfo: z.boolean().optional().default(true)
});

export type HeaderProps = z.infer<typeof HeaderPropsSchema>;
