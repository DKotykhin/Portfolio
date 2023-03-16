import expressback from "images/projects/express_600x361.webp";
import apolloback from "images/projects/apollo_600x361.webp";
import nestback from "images/projects/nest_600x361.webp";

import { coffeedoorArray, todolistArray, portfolioArray } from "./photoArray";

import { ICard } from "./cardTypes";

export const projectData: Array<ICard> = [
    {
        id: 1,
        title: "CoffeeDoor",
        subtitleEn: "Coffee and Tea Online Shop",
        subtitleUkr: "Онлайн магазин кави та чаю",
        imageArray: coffeedoorArray,
        openLink: "https://coffeedoor.space",
        githubLink: "https://github.com/DKotykhin/Coffeedoor-next-Hygraph",
        descriptionEn:
            "Three languages online coffee, tea and accessories store with Next JS for SSR rendering. Use Hygraph CMS for content placing. Mobile friendly.",
        descriptionUkr:
            "Онлайн магазин кави, чаю та кавових аксесуарів. Підтримує три мови. Використовує Next JS для SSR рендерингу. Адаптивний слайдер для товарів. Контент розміщений за допомогою Hygraph CMS. Адаптивний дизайн.",
        tags: [
            "React",
            "Next JS",
            "Redux",
            "MUI",
            "Hygraph",
            "Typescript",
            "Swiper",
            "SASS",
            "Framer Motion",
            "Yup",
        ],
    },
    {
        id: 2,
        title: "Todolist",
        subtitleEn: "Easy Todo App",
        subtitleUkr: "Застосунок для ваших справ",
        imageArray: todolistArray,
        openLink: "https://mytodolist.fun",
        githubLink: "https://github.com/DKotykhin/TodoList-Frontend-RTK-Query",
        descriptionEn:
            "Easy TodoList with full CRUD operations for users and their tasks. Mongo DB for a database. User login/logout, delete and registration. Validation all fields. Sort, search for task. Full description in gitHub.",
        descriptionUkr:
            "Простий застосунок для керування справами. Підтримує повний цикл CRUD операцій для користувачів та їх справ. База даних на Mongo DB. Вхід, вихід, реєстрація та видалення користувачів. Валідація всіх форм. Сортування, пошук для справ. Повний опис на gitHub.",
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
        id: 3,
        title: "Portfolio",
        subtitleEn: "My Portfolio Project",
        subtitleUkr: "Проект мого портфоліо",
        imageArray: portfolioArray,
        openLink: "https://dmytro-kotykhin.netlify.app",
        githubLink: "https://github.com/DKotykhin/Portfolio",
        descriptionEn:
            "This 2-languages SPA helps introduce my skills in professional way. It's a simply way to see my own projects",
        descriptionUkr:
            "Застосунок допомагає предстваити мій професійний досвід. Підтримує дві мови. Найпростіший спосіб подивитися мої проекти",
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
            "React GA4"
        ],
    },
    {
        id: 4,
        title: "Express JS Backend for TodoList",
        subtitleEn: "Connect Frontend App with MongoDB",
        subtitleUkr: "Поєднує клієнтську частину з базою MongoDB",
        imageArray: [expressback],
        openLink: "https://todolist-new17.herokuapp.com/",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Express",
        descriptionEn:
            "The backend app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Node JS and ExpressJS.",
        descriptionUkr:
            "Цей бекенд застосунок допомагає поєднати клієнтську частину з базою даних MongoDB. Підтримує повний перелік CRUD операцій для користувачів та їх справ. Допомагає організувати пагінацію, сортування та пошук справ за певними параметрами. Зроблений на Node JS з використанням ExpressJS.",
        tags: [
            "Node JS",
            "Express JS",
            "Mongoose",
            "Multer",
            "Yup",
            "JWT",
            "Bcrypt",
        ],
    },
    {
        id: 5,
        title: "Apollo JS Backend for TodoList",
        subtitleEn: "Connect Frontend App with MongoDB",
        subtitleUkr: "Поєднує клієнтську частину з базою MongoDB",
        imageArray: [apolloback],
        openLink: "https://todolist-new19.herokuapp.com/graphql",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Apollo",
        descriptionEn:
            "The backend app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Node JS and Apollo Server v4.",
        descriptionUkr:
            "Цей бекенд застосунок допомагає поєднати клієнтську частину з базою даних MongoDB. Підтримує повний перелік CRUD операцій для користувачів та їх справ. Допомагає організувати пагінацію, сортування та пошук справ за певними параметрами. Зроблений на Node JS з використанням Apollo Server v4.",
        tags: [
            "Node JS",
            "Express JS",
            "Mongoose",
            "Multer",
            "Yup",
            "JWT",
            "Bcrypt",
        ],
    },
    {
        id: 6,
        title: "Nest JS Backend for TodoList",
        subtitleEn: "Connect Frontend App with MongoDB",
        subtitleUkr: "Поєднує клієнтську частину з базою MongoDB",
        imageArray: [nestback],
        openLink: "https://todolist-new20.herokuapp.com/",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-NestJS",
        descriptionEn:
            "The backend app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Nest JS.",
        descriptionUkr:
            "Цей бекенд застосунок допомагає поєднати клієнтську частину з базою даних MongoDB. Підтримує повний перелік CRUD операцій для користувачів та їх справ. Допомагає організувати пагінацію, сортування та пошук справ за певними параметрами. Зроблений на Nest JS.",
        tags: ["Node JS", "Nest JS", "Mongoose", "JWT", "Bcrypt"],
    },
];
