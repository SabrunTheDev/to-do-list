# To-Do List App

This is a simple to-do list application built using React. It allows users to add, edit, mark as complete, and delete to-do items.

## Features

- **Add To-Do:** Users can add new to-do items by typing in the input field and pressing enter.
- **Complete To-Do:** Clicking on a to-do item marks it as complete, visually distinguishing it from incomplete items.
- **Edit To-Do:** Users can edit existing to-do items by clicking on them and typing in the input field.
- **Delete To-Do:** To-do items can be deleted by clicking on the delete button associated with each item, this is only available if the to-do is marked as complete.

## Code Structure

- **`App.js`:** This is the main entry point of the application. It renders the `ToDoList` component, which manages the state of the to-do items and renders the UI.

- **`ToDoList.js`:** This component is the main component of the application. It manages the state of the to-do items and renders the to-do form and the list of to-do items.
- **`ToDoForm.js`:** This component contains the form for adding new to-do items.
- **`ToDo.js`:** This component renders the list of to-do items and handles actions such as completing, editing, and deleting to-dos.

## Usage

To use this component in your application:

1. Ensure you have the necessary dependencies installed, such as React and any required icon libraries (`react-icons` in this case).
2. Integrate the provided code snippet into your React application, ensuring that you have the `toDos`, `completeToDo`, `deleteToDo`, `setEdit` functions, and appropriate state management set up.
3. Customize the CSS classes (`complete`, `todo-row`, `icons`, etc.) to match your application's styling requirements.
4. Implement the `completeToDo`, `deleteToDo`, and `setEdit` functions to handle the respective functionalities according to your application's logic.
5. Test the component thoroughly to ensure all functionalities work as expected.

## Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS
