import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { MdCheckCircleOutline } from "react-icons/md";

export default function ToDo({ toDos, completeToDo, deleteToDo, editToDo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    editToDo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return toDos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeToDo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <MdCheckCircleOutline
          onClick={() => completeToDo(todo.id)}
          className="check-icon"
        />
        {todo.isComplete && (
          <RiCloseCircleLine
            onClick={() => deleteToDo(todo.id)}
            disabled={!todo.isComplete}
            className="delete-icon"
          />
        )}

        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}
