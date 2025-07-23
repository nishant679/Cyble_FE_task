import { create } from 'zustand';

interface ProductFilterState {
  search: string;
  category: string;
  setSearch: (search: string) => void;
  setCategory: (category: string) => void;
}

export const useProductFilterStore = create<ProductFilterState>((set) => ({
  search: '',
  category: '',
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
}));