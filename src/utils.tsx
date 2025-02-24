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
  const pc = getCSSVariable('--color-primary')
  console.log('primary=' + pc);
  return pc;
};

export const getBackgroundColor = (): string => {
  const bc = getCSSVariable('--color-background');
  console.log('background=' + bc);
  return bc;
};
