import { create } from 'zustand';
import { AppState, MenuItem } from '../../types/layout/menuTypes';

const isBrowser = typeof window !== 'undefined';

const loadStateFromLocalStorage = () => {
  if (!isBrowser) return false;
  try {
    const serializedState = localStorage.getItem('loaded');
    return serializedState ? JSON.parse(serializedState) : false;
  } catch (e) {
    console.error("Could not load state from local storage", e);
    return false;
  }
};

const saveStateToLocalStorage = (loaded: boolean) => {
  if (!isBrowser) return;
  try {
    const serializedState = JSON.stringify(loaded);
    localStorage.setItem('loaded', serializedState);
  } catch (e) {
    console.error("Could not save state to local storage", e);
  }
};

export const useStore = create<AppState>((set) => ({
  menuItems: [
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ],
  loaded: loadStateFromLocalStorage(),
  setMenuItems: (items: MenuItem[]) => set({ menuItems: items }),
  setLoaded: (loaded: boolean) => {
    saveStateToLocalStorage(loaded);
    set({ loaded });
  },
}));