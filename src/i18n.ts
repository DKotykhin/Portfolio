import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import home from "locales/en/home.json";
import about from "locales/en/about.json";
import skills from "locales/en/skills.json";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                home,
                about,
                skills,
            },
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
