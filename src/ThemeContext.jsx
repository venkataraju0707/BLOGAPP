 // ThemeContext.jsx

import React, { createContext, useContext } from 'react';
import useTheme from './hooks/useTheme'; // Adjust the path as per your project structure

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
