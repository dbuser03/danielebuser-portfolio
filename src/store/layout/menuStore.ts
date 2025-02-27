import { create } from 'zustand';
import { AppState, MenuItem } from '../../types/layout/menuTypes';

export const useStore = create<AppState>((set) => ({
  menuItems: [
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ],
  loaded: false,
  setMenuItems: (items: MenuItem[]) => set({ menuItems: items }),
  setLoaded: (loaded: boolean) => set({ loaded }),
}));