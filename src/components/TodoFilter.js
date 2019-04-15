import React from "react";

const TodoFilter = props => {
  const { handleOnClickAll, handleOnClickActive } = props;
  return (
    <footer>
      <button className="btn btn-footer" onClick={handleOnClickAll}>
        All
      </button>
      <button className="btn btn-footer" onClick={handleOnClickActive}>
        Active
      </button>
      <button className="btn btn-footer">Completed</button>
    </footer>
  );
};

export default TodoFilter;
