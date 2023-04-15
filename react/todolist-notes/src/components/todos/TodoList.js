/* 
TODO:
Add todo items X
Complete Todo items
Delete todos
render todos X


todo = {
  id: int, unq,
  title: str,
  done: bool
} X

id algorithm X
 - are there already todo items in the array?
    - yes => generate next value based on previous X
    - no => default to 1 X
*/

import { useState } from "react";

import { useTodos } from "../../context/TodoContext";
import TodoForm from "../forms/TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, addTodo } = useTodos();
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    addTodo(e, todo);
    setTodo("");
  }

  function renderTodos() {
    return todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />;
    });
  }

  return (
    <>
      <h1>Todo List</h1>

      <TodoForm todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />

      {renderTodos()}
    </>
  );
}
