import { z } from "zod";

export const HeaderProps = z.object({
  preventNameAnimation: z.boolean().optional().default(false),
  preventMenuAnimation: z.boolean().optional().default(false),
  hideMenu: z.boolean().optional().default(false),
  clickableAuthorInfo: z.boolean().optional().default(true),
  currentPath: z.string().optional()
});
export type HeaderProps = z.infer<typeof HeaderProps>;

export const AuthorInfoProps = z.object({
  preventAnimation: z.boolean(),
  clickable: z.boolean()
});
export type AuthorInfoProps = z.infer<typeof AuthorInfoProps>;

export const NavigationMenuProps = z.object({
  preventAnimation: z.boolean(),
  hidden: z.boolean(),
  currentPath: z.string().optional()
});
export type NavigationMenuProps = z.infer<typeof NavigationMenuProps>;