import { FC, ReactNode, useState } from "react";
import { CounterContext, ICounterContext } from "./CounterContext";

export const CounterContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => setCounter((prev) => prev + 1);

  const decrementCounter = () => {
    if (counter > 0) setCounter((prev) => prev - 1);
    else alert("counter cannot be negative!!");
  };

  const resetCounter = () => setCounter(0);

  const counterContextValue: ICounterContext = {
    counter,
    incrementCounter,
    decrementCounter,
    resetCounter,
  };
  return (
    <CounterContext.Provider value={counterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};
