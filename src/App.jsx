import React, { useState } from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="Todo-List-App">
      <ToDoList />
    </div>
  );
}

export default App;
