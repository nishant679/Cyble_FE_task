import { create } from 'zustand';
import type { ProductInterface } from '../types/types';

interface ProductState {
  apiProducts: ProductInterface[];
  localProducts: ProductInterface[];
  addProduct: (product: ProductInterface) => void;
  setApiProducts: (products: ProductInterface[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  apiProducts: [],
  localProducts: [],
  addProduct: (product) =>
    set((state) => ({
      localProducts: [product, ...state.localProducts],
    })),
  setApiProducts: (products) =>
    set(() => ({
      apiProducts: products,
    })),
}));
