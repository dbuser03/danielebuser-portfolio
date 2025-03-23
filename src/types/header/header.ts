import { z } from "zod";

export const HeaderPropsSchema = z.object({
  preventNameAnimation: z.boolean().optional().default(false),
  preventMenuAnimation: z.boolean().optional().default(false),
  hideMenu: z.boolean().optional().default(false),
  clickableAuthorInfo: z.boolean().optional().default(true)
});

export const AuthorInfoPropsSchema = z.object({
  preventAnimation: z.boolean(),
  clickable: z.boolean()
});

export const NavigationMenuPropsSchema = z.object({
  preventAnimation: z.boolean(),
  hidden: z.boolean()
});

export type HeaderProps = z.infer<typeof HeaderPropsSchema>;
export type AuthorInfoProps = z.infer<typeof AuthorInfoPropsSchema>;
export type NavigationMenuProps = z.infer<typeof NavigationMenuPropsSchema>;
