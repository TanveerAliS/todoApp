export interface TodoType {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodoProps {
  text: string;
  todo: TodoType;
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
}

export interface TodoListProps {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  filteredTodos: TodoType[];
}

export interface FormProps {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<
    React.SetStateAction<{ id: string; text: string; completed: boolean }[]>
  >;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}
