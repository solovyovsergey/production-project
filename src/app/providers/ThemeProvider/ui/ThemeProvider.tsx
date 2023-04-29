import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';
import { LOCAL_STOREGE_THEME_KEY } from '../lib/useTheme';

const defaultTheme = (localStorage.getItem(LOCAL_STOREGE_THEME_KEY) as Theme)
|| Theme.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// ? почему если с memo ругается при использовании?
export default ThemeProvider;
