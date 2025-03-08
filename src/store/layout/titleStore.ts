import { create } from 'zustand';
import { TitleStore } from '@/types/layout/titleStoreType';

export const useTitleStore = create<TitleStore>((set) => ({
  titleRef: undefined,
  setTitleRef: (ref: HTMLDivElement) => set({ titleRef: ref }),
}));