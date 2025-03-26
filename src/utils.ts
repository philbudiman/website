/**
 * Retrieves the value of a CSS variable from the :root selector.
 * @param variable - The name of the CSS variable (e.g., "--color-primary").
 * @returns The value of the CSS variable as a string.
 */
export const getCSSVariable = (variable: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

export const getPrimaryColor = (): string => {
  return getCSSVariable('--color-primary');
};

export const getBackgroundColor = (): string => {
  return getCSSVariable('--color-background');
};

export const getTertiaryColor = (): string => {
  return getCSSVariable('--color-tertiary');
};

/**
 * Sets a CSS variable in the :root selector.
 * @param variable - The CSS variable to set (e.g., "--color-primary").
 * @param value - The new value for the variable.
 */
export const setCSSVariable = (variable: string, value: string): void => {
  document.documentElement.style.setProperty(variable, value);
};

/**
 * Checks if dark mode is enabled based on localStorage or system preference.
 * @returns True if dark mode is enabled, otherwise false.
 */
export const isDarkMode = (): boolean => {
  const storedPreference = localStorage.getItem("theme");
  if (storedPreference) return storedPreference === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

/**
 * Toggles dark mode and updates CSS variables accordingly.
 */
export const toggleDarkMode = (darkModeOverride?: boolean): void => {
  const darkModeEnabled = darkModeOverride ?? !isDarkMode();
  localStorage.setItem("theme", darkModeEnabled ? "dark" : "light");
  setCSSVariable("--color-primary", darkModeEnabled ? "#fff" : "#000");
  setCSSVariable("--color-background", darkModeEnabled ? "#000" : "#fff");
  setCSSVariable("--color-tertiary", darkModeEnabled ? "#202020" : "#efefef");
};

export const setDarkMode = () => {
  toggleDarkMode(true);
}

export const setLightMode = () => {
  toggleDarkMode(false);
}