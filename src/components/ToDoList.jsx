import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
  const [toDos, setToDo] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newToDos = [todo, ...toDos];
    setToDo(newToDos);
    console.log(...toDos);
  };

  return (
    <div className="">
      <h1>What To Do Today?</h1>
      <ToDoForm onSubmit={addToDo} />
    </div>
  );
}
