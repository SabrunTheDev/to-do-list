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

  const deleteToDo = (id) => {
    let deletedToDos = [...toDos].filter((todo) => todo.id !== id);

    setToDo(deletedToDos);
  };

  const editToDo = (toDoId, newId) => {
    if (!newId.text || /^\s*$/.test(newId.text)) {
      return;
    }

    setToDo((prev) => prev.map((todo) => (todo.id === toDoId ? newId : todo)));
  };

  return (
    <div className="">
      <h1>What To Do Today?</h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDo
        toDos={toDos}
        completeToDo={completeToDo}
        deleteToDo={deleteToDo}
        editToDo={editToDo}
      />
    </div>
  );
}
