import "./todo.css";

export default function Todo({ todo, taskValidation, deleteTask }) {
  return (
    <div className="row">
      <div className="col-md-8">
        <span className={todo.done ? "done" : "notDone"}>{todo.desc}</span>
      </div>
      <div className="col-md-1 justify-content-center">
        <button onClick={() => taskValidation(todo.id)}>
          <i className="bi bi-check-circle"></i>
        </button>
      </div>
      <div className="col-md-1 justify-content-center">
        <button onClick={() => deleteTask(todo.id)}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}
