import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navBarEn from "locales/en/navBar.json";
import homeEn from "locales/en/home.json";
import aboutEn from "locales/en/about.json";
import skillsEn from "locales/en/skills.json";
import projectsEn from "locales/en/projects.json";
import contactsEn from "locales/en/contacts.json";
import footerEn from "locales/en/footer.json";

import navBarUkr from "locales/ukr/navBar.json";
import homeUkr from "locales/ukr/home.json";
import aboutUkr from "locales/ukr/about.json";
import skillsUkr from "locales/ukr/skills.json";
import projectsUkr from "locales/ukr/projects.json";
import contactsUkr from "locales/ukr/contacts.json";
import footerUkr from "locales/ukr/footer.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            navBar: navBarEn,
            home: homeEn,
            about: aboutEn,
            skills: skillsEn,
            projects: projectsEn,
            contacts: contactsEn,
            footer: footerEn,
        },
        ukr: {
            navBar: navBarUkr,
            home: homeUkr,
            about: aboutUkr,
            skills: skillsUkr,
            projects: projectsUkr,
            contacts: contactsUkr,
            footer: footerUkr,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});
