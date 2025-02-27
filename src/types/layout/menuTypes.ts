import { z } from 'zod';

export const MenuItemSchema = z.object({
  href: z.string(),
  label: z.string(),
});

export const AppStateSchema = z.object({
  menuItems: z.array(MenuItemSchema),
  loaded: z.boolean(),
});

export type MenuItem = z.infer<typeof MenuItemSchema>;
export type AppState = z.infer<typeof AppStateSchema>;