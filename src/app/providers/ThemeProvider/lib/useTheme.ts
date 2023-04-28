import { useCallback, useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const LOCAL_STOREGE_THEME_KEY = 'theme';

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STOREGE_THEME_KEY, newTheme);
    setTheme(newTheme);
  }, [theme]);

  return { theme, toggleTheme };
};
