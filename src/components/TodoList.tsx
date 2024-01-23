import React from "react";
import Todo from "./Todo";
import { TodoListProps } from "../types/Todo";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
  filteredTodos,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* Mapping through filteredTodos and rendering Todo component for each todo */}
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id} // Key should be placed on the outermost element within the map function
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
