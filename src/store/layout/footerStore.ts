import { create } from 'zustand';
import { FooterStore } from '@/types/layout/footerStoreType';

export const useFooterStore = create<FooterStore>((set) => ({
  pageNumberRef: null,
  locationRef: null,
  setPageNumberRef: (ref) => set({ pageNumberRef: ref }),
  setLocationRef: (ref) => set({ locationRef: ref }),
}));
