import React, { Component } from "react";
import uuid from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoClear from "./components/TodoClear";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          title: "Finish incomplete projects"
        },
        {
          title: "Make portfolio from scratch"
        },
        {
          title: "Take 5 mins chess break"
        }
      ],
      title: "",
      id: uuid(),
      edit: false,
      done: false,
      todosToShow: "All"
    };
  }
  handleOnChange = e => {
    const value = e.target.value;
    this.setState({
      title: value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    if (!this.state.title.length) {
      return;
    }
    const newTodo = {
      id: this.state.id,
      title: this.state.title,
      done: this.state.done
    };
    const updatedTodos = [...this.state.todos, newTodo];

    this.setState({
      todos: updatedTodos,
      title: "",
      id: uuid(),
      edit: false,
      done: false,
      todosToShow: "All"
    });
  };

  handleOnchecked = (e, index) => {
    const todos = [...this.state.todos];
    todos[index] = { ...todos[index] };
    todos[index].done = e.target.checked;
    this.setState({
      todos
    });
  };

  handleOnDelete = id => {
    const filterTodos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({
      todos: filterTodos
    });
  };

  handleOnEdit = id => {
    const filterTodos = [...this.state.todos].filter(todo => todo.id !== id);
    const selectEditItem = [...this.state.todos].find(todo => todo.id === id);
    this.setState({
      todos: filterTodos,
      title: selectEditItem.title,
      edit: true,
      id: id
    });
  };
  handleOnClear = () => {
    this.setState({
      todos: []
    });
  };

  render() {
    return (
      <div className="main-container">
        <TodoInput
          title={this.state.title}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.handleOnSubmit}
          edit={this.state.edit}
        />
        <TodoList
          id={this.state.id}
          todos={this.state.todos}
          title={this.state.title}
          handleOnchecked={this.handleOnchecked}
          done={this.state.done}
          handleOnDelete={this.handleOnDelete}
          handleOnEdit={this.handleOnEdit}
          todosToShow={this.todosToShow}
        />
        <TodoClear handleOnClear={this.handleOnClear} />
      </div>
    );
  }
}

export default TodoApp;
