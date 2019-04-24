import React from "react";

const NewTodo = props => {
  const { title, handleOnChange, handleOnSubmit, edit } = props;
  return (
    <header>
      <h1>Things to todo</h1>
      <form onSubmit={handleOnSubmit} className="wrap">
        <input
          type="text"
          placeholder="add Todo"
          value={title}
          onChange={handleOnChange}
        />
        <button
          type="submit"
          className={edit ? "btn btn-edit" : "btn btn-submit"}
        >
          {" "}
          {edit ? "edit todo" : "Add todo"}
        </button>
      </form>
    </header>
  );
};

export default NewTodo;
