import { z } from "zod";

export const MenuItem = z.object({
  href: z.string(),
  label: z.string()
});
export type MenuItem = z.infer<typeof MenuItem>;

export const MenuItemProps = z.object({
  item: MenuItem,
  index: z.number(),
  preventAnimation: z.boolean()
});
export type MenuItemProps = z.infer<typeof MenuItemProps>;

export const MenuItems = z.array(MenuItem);
export type MenuItems = z.infer<typeof MenuItems>;