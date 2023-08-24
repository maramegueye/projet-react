// composants/Form.jsx
import React, { useState } from "react";

function Todolist(props) {
  const { addTodo } = props;
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
      />
    </form>
  );
}

export default Todolist;