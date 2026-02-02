import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";

const todos = [
  { id: 1, text: "Todo 1" },
  { id: 2, text: "Todo 2" },
  { id: 3, text: "Todo 3" },
];

const TodoList = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todos.map((todo) => (
            <li
              className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`}
              key={todo.id}
            >
              <div className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,_100%,_67%),hsl(280,_87%,_65%))] hover:p-[1px]">
                  <button
                    className={`w-full h-full border ${themeConfig[theme].todo.borderColor} rounded-full cursor-pointer ${
                      themeConfig[theme].todo.backgroundColor
                    }`}
                  />
                </span>
                <p className={`${themeConfig[theme].todo.textColor}`}>
                  {todo.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <div
          className={`text-sm flex justify-between p-4  
          ${themeConfig[theme].todo.textColor} 
          ${themeConfig[theme].todo.backgroundColor}
          rounded-b-md`}
        >
          <p>{todos.length} Items Total</p>

          <div className="hidden sm:flex gap-4">
            <button
              className={`text-bright-blue cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
            >
              All
            </button>
            <button
              className={`cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
            >
              Active
            </button>
            <button
              className={`cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
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

        <div
          className={`${themeConfig[theme].todo.backgroundColor}
        ${themeConfig[theme].todo.textColor}
         flex justify-center gap-5 py-4 rounded-md sm:hidden mt-4`}
        >
          <button
            className={`text-bright-blue cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            All
          </button>
          <button
            className={`cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            Active
          </button>
          <button
            className={`cursor-pointer ${theme === "dark" ? "hover:text-neutral-light-grayish-blue-hover" : "hover:text-neutral-very-dark-grayish-blue"}`}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
