import { createContext } from "react";

export interface ICounterContext {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  resetCounter: () => void;
}

export const CounterContext = createContext<ICounterContext>({
  counter: 0,
  incrementCounter: () => {},
  decrementCounter: () => {},
  resetCounter: () => {},
});
