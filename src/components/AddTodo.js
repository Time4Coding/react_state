import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState("");
  const task = {
    id: Math.random(),
    desc: todo,
    done: false,
  };
  return (
    <div>
      <label>Task to add</label>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={() => addTodo(task)}>
        <i className="bi bi-plus-circle-fill"></i>
      </button>
    </div>
  );
}
