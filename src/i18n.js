// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationSV from "./locales/sv/translation.json";


i18n
  .use(initReactI18next) // bind react-i18next till i18next
  .init({
    resources: {
      en: { translation: translationEN },
      sv: { translation: translationSV },
    },
    lng: "sv", // standard språk
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
