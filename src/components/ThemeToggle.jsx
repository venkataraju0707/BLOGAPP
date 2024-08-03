 // ThemeToggle.js
import React from 'react';
import { useThemeContext } from '../ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-700 dark:text-gray-300">Light</span>
      <div
        className="relative inline-block w-12 mr-2 align-middle select-none cursor-pointer transition duration-200 ease-in"
        onClick={toggleTheme}
      >
        <div
          className={`toggle-path block w-12 h-6 rounded-full shadow-inner ${
            theme === 'light' ? 'bg-gray-400' : 'bg-gray-800'
          }`}
        ></div>
        <div
          className={`toggle-circle absolute left-0 top-0 w-6 h-6 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-200 ease-in-out transform ${
            theme === 'light' ? 'translate-x-0' : 'translate-x-6'
          } bg-white dark:bg-gray-600`}
        ></div>
      </div>
      <span className="ml-2 text-gray-700 dark:text-gray-300">Dark</span>
    </div>
  );
};

export default ThemeToggle;
