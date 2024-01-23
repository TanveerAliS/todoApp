import React, { ChangeEvent, FormEvent } from "react";
import { FormProps } from "../types/Todo";

const Form: React.FC<FormProps> = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  setStatus,
}) => {
  // Handler for input text change
  const inputTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // Handler for form submission
  const submitTodoHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Creating a new todo with a unique id
    const newTodo = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2),
      text: inputText,
      completed: false,
    };
    // Updating todos using the state updater function
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    // Clearing the input text after submission
    setInputText("");
  };

  // Handler for selecting the status filter
  const statusHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  // Render the form component
  return (
    <form onSubmit={submitTodoHandler}>
      {/* Input for entering new todo */}
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={inputTextHandler}
      />
      {/* Button to submit new todo */}
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      {/* Dropdown for selecting todo status filter */}
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
