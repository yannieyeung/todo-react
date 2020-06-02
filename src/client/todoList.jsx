import React from "react";

function TodoList(props) {
  return (
    <div>
      <li>{props.item}</li>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        X
      </button>
    </div>
  );
}

export default TodoList;
