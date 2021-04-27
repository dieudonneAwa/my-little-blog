import { useEffect, useState } from 'react';
import { AppTheme } from '../Theme/types';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<AppTheme>('light');

  const setMode = (mode: AppTheme) => {
    setTheme(mode);
    window.localStorage.setItem('theme', mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    setTheme(localTheme as AppTheme);
  }, [theme]);

  return [theme, toggleTheme];
};
