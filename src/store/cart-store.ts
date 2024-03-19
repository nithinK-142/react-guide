import { create } from "zustand";
import { createSelectors } from "./create-selectors";

interface Product {
  id: number;
  name: string;
  description: string;
}

interface IProductStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

const useProductStore = create<IProductStore>()((set) => ({
  cart: [],

  // Actions
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));

export const useStoreSelectors = createSelectors(useProductStore);

export default useProductStore;
