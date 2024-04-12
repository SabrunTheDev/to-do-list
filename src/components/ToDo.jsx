import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function ToDo({ toDos, completeToDo, removeToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return toDos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeToDo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine />
        <TiEdit />
      </div>
    </div>
  ));
}
