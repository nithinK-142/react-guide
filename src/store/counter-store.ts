import { create } from "zustand";
import { createSelectors } from "./create-selectors";

interface ICounterStore {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  resetCounter: () => void;
}

const useCounterStore = create<ICounterStore>()((set) => ({
  counter: 0,

  // Actions
  incrementCounter: () => set((state) => ({ counter: state.counter + 1 })),
  decrementCounter: () =>
    set((state) => {
      if (state.counter > 0) {
        return { counter: state.counter - 1 };
      } else {
        alert("Counter cannot be negative!!");
        return state;
      }
    }),
  resetCounter: () => set({ counter: 0 }),
}));

export const useStoreSelectors = createSelectors(useCounterStore);

export default useCounterStore;
