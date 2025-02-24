import { useTheme } from "./useTheme";
import { LightMode, DarkMode } from '@mui/icons-material';

import './ThemeToggle.css';

interface ThemeToggleProps {
  mode?: "icon" | "text";  // Restrict mode to only "icon" or "text"
};

const ThemeToggle = ({ mode = "icon" }: ThemeToggleProps) => {
  const { darkMode, toggleTheme } = useTheme();
  const hoverMessage = `toggle ${darkMode ? 'light' : 'dark'} mode`;

  return (
    <div
      aria-label="toggle dark mode"
      className="theme-toggle"
      onClick={toggleTheme}
      title={hoverMessage}
    >
      {mode === "icon" ? (
        darkMode ? <LightMode /> : <DarkMode />
      ) : darkMode ? (
        "light"
      ) : (
        "dark"
      )}
    </div>
  );
};

export default ThemeToggle;
