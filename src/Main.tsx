import "./i18n.config";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import ThemeProvider, { Theme } from "src/providers/ThemeProvider";
import secureLocalStorage from "react-secure-storage";
import { DARK, THEME } from "@constants/theme.const";
import ToastProvider from "src/providers/ToastProvider";

const App = lazy(() => import("./App"));
const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient();
const initialTheme = (secureLocalStorage.getItem(THEME) as Theme) || DARK;

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider initialTheme={initialTheme}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </ThemeProvider>
  </QueryClientProvider>,
);
