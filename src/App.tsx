import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "./redux/slices/counter";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="pt-10 text-7xl">{count}</h2>
      <div className="flex gap-6 pt-4">
        <button
          onClick={() => dispatch(decrementCounter())}
          className="flex items-center justify-center px-3 pb-2 text-6xl text-red-400 rounded-md bg-white/10"
        >
          -
        </button>
        <button
          onClick={() => dispatch(incrementCounter())}
          className="flex items-center justify-center px-3 pb-2 text-6xl text-green-400 rounded-md bg-white/10"
        >
          +
        </button>
      </div>
      <button
        onClick={() => dispatch(resetCounter())}
        className="px-4 py-1 mt-4 text-2xl rounded-md bg-white/20"
      >
        Reset
      </button>
    </div>
  );
}
export default App;
