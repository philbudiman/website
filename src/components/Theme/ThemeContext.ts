import { createContext } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Create context with default values
export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});
