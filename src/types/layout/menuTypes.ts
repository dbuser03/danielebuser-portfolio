import { z } from 'zod';

export const MenuItemSchema = z.object({
  href: z.string(),
  label: z.string(),
});

export const AppStateSchema = z.object({
  menuItems: z.array(MenuItemSchema),
  loaded: z.boolean(),
  setMenuItems: z.function().args(z.array(MenuItemSchema)).returns(z.void()),
  setLoaded: z.function().args(z.boolean()).returns(z.void()),
});

export type MenuItem = z.infer<typeof MenuItemSchema>;
export type AppState = z.infer<typeof AppStateSchema>;