import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { isDarkMode, toggleDarkMode } from "../../utils";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(isDarkMode);
  toggleDarkMode(darkMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    toggleDarkMode();
    setDarkMode((prev: boolean): boolean => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
