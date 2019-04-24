import React from "react";

const TodoFilter = props => {
  const { todos, todosToShow } = props;

  let newTodos = [...todos];
  newTodos.forEach(todo => {
    todo.todosToShow = "All";
  });
  let todosArr = [];
  if (todosToShow === "All") {
    todosArr = newTodos;
  } else if (todosToShow === "Active") {
    todosArr = newTodos.filter(todo => !todo.done);
  } else if (todosToShow === "Completed") {
    todosArr = newTodos.filter(todo => todo.done);
  }
  const handleOnClickAll = () => {
    console.log(newTodos);
    return newTodos;
  };
  const handleOnClickActive = () => {
    return newTodos.filter(todo => !todo.done);
  };

  const handleOnClickCompleted = () => {
    return newTodos.filter(todo => todo.done);
  };

  return (
    <footer>
      {todosArr.map(todo => (
        <p key={todo.id}>
          {todo.done}
          {todo.todosToShow}
        </p>
      ))}
      <button className="btn btn-footer" onClick={() => handleOnClickAll()}>
        All
      </button>
      <button className="btn btn-footer" onClick={handleOnClickActive}>
        Active
      </button>
      <button className="btn btn-footer" onClick={handleOnClickCompleted}>
        Completed
      </button>
    </footer>
  );
};

export default TodoFilter;
