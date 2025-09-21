import i18n from "./i18n";
import { createRoot } from "react-dom/client";
import { lazy } from "react";
import secureLocalStorage from "react-secure-storage";
import { DARK } from "@constants/theme.const";
import { THEME } from "@constants/local-storage.const";
import TanstackProvider from "@providers/TanstackProvider";
import { AuthProvider } from "@providers/AuthProvider";
import { AccountProvider } from "@providers/AccountProvider";
import { Theme, ThemeProvider } from "@providers/ThemeProvider";
import ToastProvider from "@providers/ToastProvider";
import { I18nextProvider } from "react-i18next";

const App = lazy(() => import("./App"));
const container = document.getElementById("root");
const root = createRoot(container!);
const initialTheme = (secureLocalStorage.getItem(THEME) as Theme) || DARK;

root.render(
  <I18nextProvider i18n={i18n}>
    <TanstackProvider>
      {/* TODO: You should uncomment these providers for your apis */}
      {/* <AuthProvider> */}
      {/* <AccountProvider> */}
      <ThemeProvider initialTheme={initialTheme}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ThemeProvider>
      {/* </AccountProvider> */}
      {/* </AuthProvider> */}
    </TanstackProvider>
  </I18nextProvider>,
);
