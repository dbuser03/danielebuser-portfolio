import { z } from 'zod';

export const MenuItemSchema = z.object({
  href: z.string(),
  label: z.string()
});

export type MenuItem = z.infer<typeof MenuItemSchema>;

export const MenuItemPropsSchema = z.object({
  item: MenuItemSchema,
  index: z.number(),
  preventAnimation: z.boolean()
});

export type MenuItemProps = z.infer<typeof MenuItemPropsSchema>;

export const MenuItemsSchema = z.array(MenuItemSchema);
export type MenuItems = z.infer<typeof MenuItemsSchema>;