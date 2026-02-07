import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import type { Todo } from "../../App";

interface TodoListProps {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: "all" | "active" | "completed") => void;
  filter: "all" | "active" | "completed";
}

const TodoList = ({
  todoList,
  toggleTodoCompleted,
  setFilter,
  filter,
}: TodoListProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,_100%,_67%),hsl(280,_87%,_65%))] hover:p-[1px]">
                  <button
                    onClick={() => toggleTodoCompleted(todo.id)}
                    aria-label="Toggle todo completed"
                    className={`w-full h-full border rounded-full cursor-pointer
                    flex items-center justify-center
                    ${themeConfig[theme].todo.borderColor}
                    ${
                      todo.completed
                        ? "bg-[linear-gradient(to_right,hsl(192,_100%,_67%),hsl(280,_87%,_65%))]"
                        : themeConfig[theme].todo.backgroundColor
                    }`}
                  >
                    {todo.completed && (
                      <img
                        src="/images/icon-check.svg"
                        alt="check icon"
                        className="w-3 h-3"
                      />
                    )}
                  </button>
                </span>
                <p
                  className={`${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50" : ""}`}
                >
                  {todo.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Todo List Footer */}      
      <div className="space-y-4">
        <div
          className={`text-sm flex justify-between p-4  
          ${themeConfig[theme].todo.textColor} 
          ${themeConfig[theme].todo.backgroundColor}
          rounded-b-md`}
        >
          <p>{todoList.length} Items Total</p>

          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`${filter === "all" ? 'text-bright-blue' : ''} cursor-pointer ${theme === "dark"  
                ?"hover:text-neutral-light-grayish-blue-hover"
                :"hover:text-neutral-very-dark-grayish-blue"}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("active")}
              className={`${filter === "active" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`${setFilter === "completed" ? 'text-bright-blue' : ''} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
            >
              Completed
            </button>
          </div>

          <button
            className={`cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            Clear Completed
          </button>
        </div>

        {/* mobile footer */}
        <div
          className={`${themeConfig[theme].todo.backgroundColor}
        ${themeConfig[theme].todo.textColor}
         flex justify-center gap-5 py-4 rounded-md sm:hidden mt-4`}
        >
          <button
            onClick={() => setFilter("all")}
            className={`${filter === "all" ? "text-bright-blue" : ""} ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`${filter === "active" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`${filter === "completed" ? "text-bright-blue" : ""} cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            Completed
          </button>
        </div>
      </div>
      
    </>
  );
};

export default TodoList;
