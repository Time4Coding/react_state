import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos, taskValidation, deleteTask }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          taskValidation={taskValidation}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
