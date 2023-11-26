import { DARK, LIGHT, THEME } from "@constants/theme.const";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import secureLocalStorage from "react-secure-storage";

export type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme: Theme;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const storedTheme =
    (secureLocalStorage.getItem(THEME) as Theme) || (initialTheme as Theme) || DARK;
  const [theme, setTheme] = useState<Theme>(storedTheme);

  const toggleTheme = () => {
    setTheme((current) => {
      const newTheme = current === LIGHT ? DARK : LIGHT;
      secureLocalStorage.setItem(THEME, newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === DARK);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
