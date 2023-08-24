
import React, { useState } from "react";
import "./App.css";
import Todo from "./composants/Todo";
import Todolist from "./composants/Todolist";

function App() {
  const Courses = [
    { text: "Lait", isCompleted: false },
    { text: "Beure", isCompleted: true },
    { text: "creme fraiche", isCompleted: false },
    { text: "fromage", isCompleted: false },
    { text: "yaourts", isCompleted: false },
  ];
  const [todos, setTodos] = useState(Courses);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="title">Liste de Courses</div>
      <h2>Produits Laitiers</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completedTodo={completedTodo}
            removeTodo={removeTodo}
          />
        ))}
        <Todolist addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;