import React from "react";

const TodoItem = props => {
  const { todo, handleOnchecked, done, handleOnDelete, handleOnEdit } = props;
  return (
    <li>
      <input type="checkbox" value={done} onChange={handleOnchecked} />
      <h4>
        <span className={todo.done ? "done" : ""}>{todo.title}</span>
      </h4>
      <span className="edit" onClick={() => handleOnEdit(todo.id)}>
        <i className="far fa-edit" />
      </span>
      <span className="delete" onClick={() => handleOnDelete(todo.id)}>
        <i className="fas fa-trash-alt" />
      </span>
    </li>
  );
};

export default TodoItem;
