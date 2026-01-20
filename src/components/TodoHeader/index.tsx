import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";

const TodoHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isLight = theme === "light";

  return (
    <header className="flex justify-between mb-6 pt-20">
      <h1
        className={`text-[2.5rem] font-bold tracking-[1rem]
          ${isLight ? "text-white" : "text-white" }`}
              >
        TODO
      </h1>

      <button className="cursor-pointer" onClick={toggleTheme}>
        <img
          className="w-8 h-8"
          src={`${themeConfig[theme].icon}`}
          alt="Alternar Tema"
        />
      </button>
    </header>
  );
};

export default TodoHeader;