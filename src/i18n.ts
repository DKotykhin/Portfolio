import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import navBarEn from "locales/en/navBar.json";
import homeEn from "locales/en/home.json";
import aboutEn from "locales/en/about.json";
import skillsEn from "locales/en/skills.json";
import projectsEn from "locales/en/projects.json";
import contactsEn from "locales/en/contacts.json";
import footerEn from "locales/en/footer.json";
import certEn from "locales/en/certificates.json";

import navBarUa from "locales/ua/navBar.json";
import homeUa from "locales/ua/home.json";
import aboutUa from "locales/ua/about.json";
import skillsUa from "locales/ua/skills.json";
import projectsUa from "locales/ua/projects.json";
import contactsUa from "locales/ua/contacts.json";
import footerUa from "locales/ua/footer.json";
import certUa from "locales/ua/certificates.json";

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
            certificates: certEn,
        },
        ua: {
            navBar: navBarUa,
            home: homeUa,
            about: aboutUa,
            skills: skillsUa,
            projects: projectsUa,
            contacts: contactsUa,
            footer: footerUa,
            certificates: certUa,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});
