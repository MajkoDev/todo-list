import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheck() {
    toggleComplete(todo.id);
  }

  function handleDelete() {
    removeTodo(todo.id);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "25px",
        minWidth: "400px",
      }}>
      <div
        style={{
          display: "flex",
        }}>
        <input
          className='input checkbox'
          type='checkbox'
          onClick={handleCheck}
          style={{
            marginRight: "1rem",
          }}
        />
        <li
          style={{
            listStyle: "none",
            fontSize: "20px",
            fontWeight: "500",
            marginRight: "0.75rem",
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
          }}>
          {todo.task}
        </li>
      </div>

      <button className='btn btn-delete' onClick={handleDelete}></button>
    </div>
  );
}

export default Todo;
