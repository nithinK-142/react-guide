import { Todo } from "@/lib/types";
import React, { createContext, useEffect, useState } from "react";

interface TodosContextProviderProps {
  children: React.ReactNode;
}

interface TodosContextType {
  todos: Todo[];
  isLoading: boolean;
  totalTodos: number;
  completedTodos: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const TodosContext = createContext<TodosContextType | null>(null);

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const isAuthenticated: boolean = false;
  // state
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // derived state
  const totalTodos: number = todos.length;
  const completedTodos: number = todos.filter((todo) => todo.completed).length;

  // actions / event handlers
  const addTodo = (text: string): void => {
    // check if user is logged in
    if (todos.length >= 3 && !isAuthenticated) {
      alert("To add more todos, please log in.");
      return;
    }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // side effects
  useEffect(() => {
    const fetchTodos = async (): Promise<void> => {
      setIsLoading(true);

      const response: Response = await fetch(
        "https://bytegrad.com/course-assets/api/todos"
      );
      const todos: Todo[] = await response.json();
      setTodos(todos);

      setIsLoading(false);
    };

    fetchTodos();
  }, []);

  const contextValue: TodosContextType = {
    todos,
    isLoading,
    totalTodos,
    completedTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
}
