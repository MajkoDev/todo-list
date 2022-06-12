import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({ id: "", task: "", completed: false });

  function handleInput(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='task'
        type='text'
        value={todo.task}
        onChange={handleInput}
        style={{ 
          height: "1.5rem", 
          width: "15rem", 
          border: "1px solid black" }}
      />
      <button className='btn btn-submit' type='submit'>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
