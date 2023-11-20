import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSwitchTheme = () => {
    if (!isDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.dark = true;
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.dark = false;
    }
  };

  useEffect(() => {
    if (localStorage.dark === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDark: isDarkMode, setDark: handleSwitchTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
