import { create } from 'zustand';
import { AppState, MenuItem } from '@/types/layout/menuTypes';
import { IS_BROWSER, STORAGE_KEY } from '@/constants/utils';
import { DEFAULT_MENU_ITEMS } from '@/constants/header';

const loadStateFromLocalStorage = () => {
  if (!IS_BROWSER) return false;
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    return serializedState ? JSON.parse(serializedState) : false;
  } catch (e) {
    console.error("Could not load state from local storage", e);
    return false;
  }
};

const saveStateToLocalStorage = (loaded: boolean) => {
  if (!IS_BROWSER) return;
  try {
    const serializedState = JSON.stringify(loaded);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (e) {
    console.error("Could not save state to local storage", e);
  }
};

export const useStore = create<AppState>((set) => ({
  menuItems: DEFAULT_MENU_ITEMS,
  loaded: loadStateFromLocalStorage(),
  setMenuItems: (items: MenuItem[]) => set({ menuItems: items }),
  setLoaded: (loaded: boolean) => {
    saveStateToLocalStorage(loaded);
    set({ loaded });
  },
}));