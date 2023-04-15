export default function TodoForm(props) {
  return (
    <form onSubmit={props.handleSubmit} className="add-todo">
      <input
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
        type="text"
        placeholder="Add Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}
