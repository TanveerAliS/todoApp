import React from "react";
import { TodoProps } from "../types/Todo";

const Todo: React.FC<TodoProps> = ({ text, todo, todos, setTodos }) => {
  // Handler to delete a todo
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // Handler to mark a todo as completed or incomplete
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        // Toggle the completed status of the selected todo
        if (item.id === todo.id) return { ...item, completed: !item.completed };
        return item;
      })
    );
  };

  // Render the individual todo
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <div>
        {/* Button to mark todo as complete or incomplete */}
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        {/* Button to delete todo */}
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
