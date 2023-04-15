import TodosContext from "../context/TodoContext";
import TodoList from "./todos/TodoList";

export default function App() {
  return (
    <div className="app">
      <TodosContext>
        <TodoList />
      </TodosContext>
    </div>
  );
}
