import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import i18next from "i18next";

i18next
  .use(HttpApi)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: "languageOnly",
    lng: "fa",
    fallbackLng: "fa",
    defaultNS: "fa",
    backend: {
      loadPath: "./src/i18n/{{lng}}/translations.json",
    },
    interpolation: {
      escapeValue: false,
    },
    // resources: {
    //   en: {
    //     translation: "./src/i18n/en/translations.json",
    //   },
    //   fa: {
    //     translation: "./src/i18n/fa/translations.json",
    //   },
    // },
  });

export default i18next;
