import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(`Effect ran. Count: ${count}, Name: ${name}`);

    return () => {
      console.log("Cleanup function ran");
    };
  }, [count, name]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>Count: {count}</p>
      <p className="truncate w-[30ch]">Name: {name}</p>
      <button onClick={() => setCount(count + 1)}
      className="px-2 py-1 m-2 rounded-md bg-slate-500"
      >Increment Count</button>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-2 text-black"
      />
    </div>
  );
}

export default App;
