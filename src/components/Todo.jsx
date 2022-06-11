import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheck() {
    toggleComplete(todo.id);
  }

  function handleDelete() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ display: "flex", textAlign: "center" }}>
      <input type='checkbox' onClick={handleCheck} />
      <li
        style={{
          color: "dark-gray",
          listStyle: "none",
          textDecoration: todo.completed ? "line-through" : "none",
        }}>
        {todo.task}
      </li>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}

export default Todo;
