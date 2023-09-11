import "./App.css";
import React from "react";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          desc: "get a coffe",
          done: false,
        },
        {
          id: 2,
          desc: "get a coffe",
          done: false,
        },
        {
          id: 3,
          desc: "get a coffe",
          done: false,
        },
      ],
    };
  }
  addTodo = (task) => this.setState({ tasks: [...this.state.tasks, task] });
  taskValidation = (id) =>
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === id ? { ...task, done: true } : task
      ),
    });
  deleteTask = (id) =>
    this.setState({ tasks: this.state.tasks.filter((task) => task.id !== id) });

  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={this.state.tasks}
          handleDone={this.todoDone}
          taskValidation={this.taskValidation}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}
export default App;
