import { useStoreSelectors } from "./store/counter-store";

function App() {
  const counter = useStoreSelectors.use.counter();
  const incrementCounter = useStoreSelectors.use.incrementCounter();
  const decrementCounter = useStoreSelectors.use.decrementCounter();
  const resetCounter = useStoreSelectors.use.resetCounter();
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="pt-10 text-7xl">{counter}</h2>
      <div className="flex gap-6 pt-4">
        <button
          onClick={decrementCounter}
          className="flex items-center justify-center px-3 pb-2 text-6xl text-red-400 rounded-md active:scale-90 bg-white/10"
        >
          -
        </button>
        <button
          onClick={incrementCounter}
          className="flex items-center justify-center px-3 pb-2 text-6xl text-green-400 rounded-md active:scale-90 bg-white/10"
        >
          +
        </button>
      </div>
      <button
        onClick={resetCounter}
        className="px-4 py-1 mt-4 text-2xl rounded-md bg-white/20"
      >
        Reset
      </button>
    </div>
  );
}
export default App;
