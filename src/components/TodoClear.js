import React from "react";

const TodoClear = props => {
  const { handleOnClear } = props;
  return (
    <div>
      <button className="btn btn-clear" onClick={handleOnClear}>
        Clear All
      </button>
    </div>
  );
};

export default TodoClear;
