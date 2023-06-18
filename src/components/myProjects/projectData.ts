import apolloback from "images/projects/apollo_600x361.webp";
import nestback from "images/projects/nest_600x361.webp";
import coffeedoorExpress from "images/projects/coffeedoor_express_600x361.webp";

import {
    coffeedoorArray,
    todolistArray,
    portfolioArray,
    coffeedoorLightArray,
} from "./photoArray";

import { ICard } from "./cardTypes";

export const projectData: Array<ICard> = [
    {
        id: 1,
        title: "CoffeeDoor - online shop",
        subtitle: {
            en: "Coffee and Tea Online Shop",
            ua: "Онлайн магазин кави та чаю",
        },
        imageArray: coffeedoorArray,
        openLink: "https://luckycat.pp.ua",
        githubLink:
            "https://github.com/DKotykhin/coffeedoor-frontend-RTK-Query",
        description: {
            en: "Three languages online coffee, tea and accessories store with user personal page and admin panel for CRUD for shop items and coffeeshop menu. Orders history and update users data on personal page. Mobile friendly.",
            ua: "Онлайн магазин кави, чаю та кавових аксесуарів. Підтримує три мови. Адаптивний слайдер для товарів. Персональна сторінка користувача для зміни даних та історії замовленнь. Адмін панель для CRUD операцій з товарами магазину та меню кав'ярні. Адаптивний дизайн.",
        },
        tags: [
            "React",
            "Typescript",
            "Redux",
            "MUI",
            "i18next",
            "Framer Motion",
            "React Hook Form",
            "React Toastify",
            "React Markdown",
            "Swiper",
            "SASS",
            "Yup",
        ],
    },
    {
        id: 2,
        title: "Express JS Backend for Coffeedoor",
        subtitle: {
            en: "Connect Frontend App with MongoDB",
            ua: "Поєднує клієнтську частину з базою MongoDB",
        },
        imageArray: [coffeedoorExpress],
        openLink: "https://coffeedoor-backend-express.herokuapp.com",
        githubLink: "https://github.com/DKotykhin/Coffeedoor-backend-express",
        description: {
            en: "The backend app helps to connect frontend with MongoDB database. Provides full CRUD operations for 4 models: store items, menu items, orders and users. Field validation, file uploader, email sender and error handler",
            ua: "Цей бекенд застосунок допомагає поєднати клієнтську частину з базою даних MongoDB. Підтримує повний перелік CRUD операцій для 4-х моделей: елементів магазину та меню, замовленнь та користувачів. Валідація даних, завантаження файлів, розсилка email та обробка помилок",
        },
        tags: [
            "Node JS",
            "Express",
            "Mongoose",
            "Multer",
            "Axios",
            "Nodemailer",
            "JWT",
            "Bcrypt",
        ],
    },
    {
        id: 3,
        title: "Todolist",
        subtitle: {
            en: "Easy Todo App",
            ua: "Застосунок для ваших справ",
        },
        imageArray: todolistArray,
        openLink: "https://mytodolist.fun",
        githubLink: "https://github.com/DKotykhin/TodoList-Frontend-RTK-Query",
        description: {
            en: "Easy TodoList with full CRUD operations for users and their tasks. Mongo DB for a database. User login/logout, delete and registration. Validation all fields, restore password via email. Sort, search for task. Full description in gitHub.",
            ua: "Простий застосунок для керування справами. Підтримує повний цикл CRUD операцій для користувачів та їх справ. База даних на Mongo DB. Вхід, вихід, реєстрація та видалення користувачів. Валідація всіх форм, відновлення паролю через пошту. Сортування, пошук для справ. Повний опис на gitHub.",
        },
        tags: [
            "React",
            "Redux",
            "RTK Query",
            "Typescript",
            "React Hook Form",
            "MUI",
            "SASS",
            "Yup",
            "EasyMDE",
        ],
    },
    {
        id: 4,
        title: "Nest JS Backend for TodoList",
        subtitle: {
            en: "Connect Frontend App with MongoDB",
            ua: "Поєднує клієнтську частину з базою MongoDB",
        },
        imageArray: [nestback],
        openLink: "https://todolist-new20.herokuapp.com",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-NestJS",
        description: {
            en: "The backend app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Restore password via email. Build with Nest JS.",
            ua: "Цей бекенд застосунок допомагає поєднати клієнтську частину з базою даних MongoDB. Підтримує повний перелік CRUD операцій для користувачів та їх справ. Допомагає організувати пагінацію, сортування та пошук справ за певними параметрами. Відновлення паролю через пошту. Зроблений на Nest JS.",
        },
        tags: ["Node JS", "Nest JS", "Mongoose", "Nodemailer", "Swagger", "JWT", "Bcrypt"],
    },
    {
        id: 5,
        title: "Apollo GraphQL Backend for TodoList",
        subtitle: {
            en: "Connect Frontend App with MongoDB",
            ua: "Поєднує клієнтську частину з базою MongoDB",
        },
        imageArray: [apolloback],
        openLink: "https://todolist-new19.herokuapp.com/graphql",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Apollo",
        description: {
            en: "The backend app helps to connect frontend with MongoDB database using GraphQL query language. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Node JS and Apollo Server v4.",
            ua: "Цей бекенд застосунок допомагає поєднати клієнтську частину з базою даних MongoDB за допомогою мови запитів GraphQL. Підтримує повний перелік CRUD операцій для користувачів та їх справ. Допомагає організувати пагінацію, сортування та пошук справ за певними параметрами. Зроблений на Node JS з використанням Apollo Server v4.",
        },
        tags: [
            "Node JS",
            "Apollo",
            "GraphQL",
            "Mongoose",
            "Multer",
            "Yup",
            "JWT",
            "Bcrypt",
        ],
    },
    {
        id: 6,
        title: "CoffeeDoor - light version",
        subtitle: {
            en: "Coffee and Tea Online Shop on Hygraph CMS",
            ua: "Онлайн магазин кави та чаю з Hygraph CMS",
        },
        imageArray: coffeedoorLightArray,
        openLink: "https://coffeedoor.space",
        githubLink: "https://github.com/DKotykhin/Coffeedoor-next-Hygraph",
        description: {
            en: "Three languages online coffee, tea and accessories store with Next JS for SSR rendering and GraphQL API. Use Hygraph CMS for content placing. Mobile friendly.",
            ua: "Онлайн магазин кави, чаю та кавових аксесуарів. Підтримує три мови. Використовує Next JS для SSR рендерингу та GraphQL API. Адаптивний слайдер для товарів. Контент розміщений за допомогою Hygraph CMS. Адаптивний дизайн.",
        },
        tags: [
            "React",
            "Typescript",
            "Next JS",
            "Redux",
            "MUI",
            "GraphQL",
            "Hygraph",
            "Swiper",
            "Framer Motion",
            "SASS",
            "Yup",
        ],
    },
    {
        id: 7,
        title: "Portfolio",
        subtitle: {
            en: "My Portfolio Project",
            ua: "Проект мого портфоліо",
        },
        imageArray: portfolioArray,
        openLink: "https://dmytro-kotykhin.netlify.app",
        githubLink: "https://github.com/DKotykhin/Portfolio",
        description: {
            en: "This 2-languages SPA helps introduce my skills in professional way. It's a simply way to see my own projects",
            ua: "Застосунок допомагає представити мій професійний досвід. Підтримує дві мови. Найпростіший спосіб подивитися мої проекти",
        },
        tags: [
            "React",
            "Typescript",
            "React Scroll",
            "React Hook Form",
            "Framer Motion",
            "MUI",
            "EmailJS",
            "SASS",
            "i18next",
            "Swiper",
            "Yup",
            "React GA4",
        ],
    },
];
