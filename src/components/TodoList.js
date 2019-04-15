import React from "react";
import TodoItem from "./TodoItem";

const TodoList = props => {
  const { todos, handleOnchecked, handleOnDelete, handleOnEdit } = props;
  return (
    <main>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            handleOnchecked={e => handleOnchecked(e, index)}
            todo={todo}
            handleOnEdit={handleOnEdit}
            handleOnDelete={handleOnDelete}
          />
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
