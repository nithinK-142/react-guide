import { useState } from "react";

type Todo = {
  task: string;
  done: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      task: "get milk",
      done: true,
    },
    {
      task: "buy bread",
      done: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo) {
      alert("Taskfield is empty!");
      return;
    }
    setTodos((prev) => [...prev, { task: newTodo, done: false }]);
    setNewTodo("");
  };

  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <main className="flex flex-col items-center text-center">
      <h1 className="my-4 text-xl font-semibold">Task Manager</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <div className="flex space-x-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="px-2 py-1 text-black rounded-md"
          />
          <button className="px-4 py-1 text-black rounded-md bg-white/90">
            Enter
          </button>
        </div>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between my-2 space-x-2"
          >
            <span>{todo.task}</span>
            <span>
              {todo.done ? (
                <span className="text-green-500">complete</span>
              ) : (
                <span className="text-red-500">incomplete</span>
              )}
            </span>
            <button
              onClick={() => removeTodo(index)}
              className="px-4 py-1 text-white rounded-md bg-red-500/90"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default App;
