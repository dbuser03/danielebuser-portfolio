import { create } from 'zustand';
import { HeaderStore } from '@/types/layout/headerStoreType';

export const useHeaderStore = create<HeaderStore>((set) => ({
  titleRef: undefined,
  setTitleRef: (ref: HTMLDivElement) => set({ titleRef: ref }),
  menuItemsRef: [],
  setMenuItemsRef: (refs: (HTMLDivElement | null)[]) => set({ menuItemsRef: refs }),
}));