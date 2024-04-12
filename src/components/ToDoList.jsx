import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

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

  const completeToDo = (id) => {
    let updatedToDos = toDos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setToDo(updatedToDos);
  };

  return (
    <div className="">
      <h1>What To Do Today?</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo toDos={toDos} completeToDo={completeToDo} />
    </div>
  );
}
