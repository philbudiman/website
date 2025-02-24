import { useTheme } from "./useTheme";
import { LightMode, DarkMode } from '@mui/icons-material';

interface ThemeToggleProps {
  mode?: "icon" | "text";  // Restrict mode to only "icon" or "text"
};

const ThemeToggle = ({ mode = "icon" }: ThemeToggleProps) => {
  const { darkMode, toggleTheme } = useTheme();
  const hoverMessage = `toggle ${darkMode ? 'light' : 'dark'} mode`;

  return (
    <div
      style={{
        color: darkMode ? 'white' : 'black',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'normal',
      }}
      onClick={toggleTheme}
      title={hoverMessage}
      aria-label="toggle dark mode"
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
