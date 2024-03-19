import { create } from "zustand";

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

export const selectCounter = (state: ICounterStore) => state.counter;

export default useCounterStore;
