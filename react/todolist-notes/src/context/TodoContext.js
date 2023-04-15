import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export default function TodosContext({ children }) {
  const [todos, setTodos] = useState([]);

  function addTodo(e, title) {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Todo cannot be empty");
      return;
    }

    setTodos((todos) => {
      const newTodo = {
        id: todos.at(-1)?.id + 1 || 1,
        title: title,
        done: false
      };

      return [...todos, newTodo];
    });
  }

  function handleComplete(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  const todoState = {
    todos,
    addTodo,
    handleComplete,
    handleDelete
  };

  return (
    <TodoContext.Provider value={todoState}>{children}</TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
