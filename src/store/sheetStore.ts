// store/sheetStore.ts
import { create } from "zustand";

interface sheetState {
  sheetOpen: boolean;
  setSheetOpen: (open: boolean) => void;
  toggleSheet: () => void;
  sheetContent: React.ReactNode;
  setSheetContent: (content: React.ReactNode) => void;
}

export const useSheet = create<sheetState>((set) => ({
  sheetOpen: false,
  setSheetOpen: (open) => set({ sheetOpen: open }),
  toggleSheet: () => set((state) => ({ sheetOpen: !state.sheetOpen })),
  sheetContent: null,
  setSheetContent: (content) => set({ sheetContent: content }),
}));
