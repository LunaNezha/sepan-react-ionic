import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { THEME } from "@constants/local-storage.const";
import { DARK, LIGHT } from "@constants/theme.const";
import secureLocalStorage from "react-secure-storage";

export type Theme = "light" | "dark";

type ThemeContextProps = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  initialTheme: Theme;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const storedTheme =
    (secureLocalStorage.getItem(THEME) as Theme) ||
    (initialTheme as Theme) ||
    DARK;
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

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
