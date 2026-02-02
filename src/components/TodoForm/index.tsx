import { useContext, type FormEvent } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";

interface TodoInputProps {
  addTodo: (event: FormEvent<HTMLFormElement>) => void;
}

const TodoForm = ({ addTodo }: TodoInputProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <form className="relative mb-10" onSubmit={addTodo}>
      <span
        className={`
      absolute left-6 top-1/2
      w-6 h-6
      -translate-y-1/2
      rounded-full border
      ${themeConfig[theme].todo.borderColor}
    `}
      ></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        name="todo"
        className={`${themeConfig[theme].todo.backgroundColor} w-full ${themeConfig[theme].todo.textColor} rounded-md py-6 pl-16 outline-none text-lg 
        `}
      />
    </form>
  );
};

export default TodoForm;
