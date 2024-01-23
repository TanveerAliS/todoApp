import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { TodoType } from "./types/Todo";

const App: React.FC = () => {
  // State variables to manage input text, todos, status, and filtered todos
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [status, setStatus] = useState<string>("all");
  const [filteredTodos, setFilteredTodos] = useState<TodoType[]>([]);

  // Effect hook to fetch todos from local storage on component mount
  useEffect(() => {
    getLocalTodos();
  }, []);

  // Effect hook to handle filtering and saving todos whenever todos or status change
  useEffect(() => {
    filterHandler();
    saveToLocalTodos();
  }, [todos, status]);

  // Function to filter todos based on their completion status
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Function to save todos to local storage
  const saveToLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Function to retrieve todos from local storage
  const getLocalTodos = () => {
    if (!localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let toLocal: TodoType[] = JSON.parse(
        localStorage.getItem("todos") || "[]"
      );
      // Updating todos using the state updater function to ensure consistency
      setTodos((prevTodos) => [...prevTodos, ...toLocal]);
    }
  };

  // Render the main structure of the application
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      {/* Form component to handle user input and add new todos */}
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      {/* TodoList component to display and manage the list of todos */}
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
};

// Exporting the App component as the default export
export default App;
