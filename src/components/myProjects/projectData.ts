import coffeedoor from "images/projects/coffeedoor_600x361.webp";
import todolist from "images/projects/todolist_600x361.webp";
import expressback from "images/projects/express_600x361.webp";
import nestback from "images/projects/nest_600x361.webp";
import apolloback from "images/projects/apollo_600x361.webp";
import portfolio from "images/projects/portfolio_600x361.webp";

import { ICard } from "./cardTypes";

export const projectData: Array<ICard> = [
    {
        id: 1,
        title: "CoffeeDoor",
        subtitle: "Coffee and Tea Online Shop",
        image: coffeedoor,
        openLink: "https://coffeedoor.space",
        githubLink: "https://github.com/DKotykhin/Coffeedoor-next-Hygraph",
        description:
            "Three languages online coffee, tea and accessories store with Next JS for SSR rendering. Use Hygraph CMS for content placing. Mobile friendly.",
        tags: [
            "React",
            "Next JS",
            "Redux",
            "Hygraph",
            "Typescript",
            "Swiper",
            "MUI",
            "SASS",
            "Framer Motion",
            "Yup",
        ],
    },
    {
        id: 2,
        title: "Todolist",
        subtitle: "Easy Todo App",
        image: todolist,
        openLink: "https://mytodolist.fun",
        githubLink: "https://github.com/DKotykhin/TodoList-Frontend-RTK-Query",
        description:
            "Easy TodoList with full CRUD operations for users and their tasks. Nongo DB for a database. User login/logout, delete and registration. Validation all fields. Sort, search for task. Full description in gitHub.",
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
        subtitle: "Dmytro Kotykhin Portfolio",
        image: portfolio,
        openLink: "https://dmytro-kotykhin.netlify.app",
        githubLink: "https://github.com/DKotykhin/Portfolio",
        description:
            "The SPA helps introduce my skills in professional way. It's a simply way to see my own projects",
        tags: [
            "React",
            "Typescript",
            "React Scroll",
            "React Hook Form",
            "Framer Motion",
            "EmailJS",
            "MUI",
            "SASS",
            "Yup",
        ],
    },
    {
        id: 4,
        title: "Express JS Backend for TodoList",
        subtitle: "Connect Frontend App with MongoDB",
        image: expressback,
        openLink: "https://todolist-new17.herokuapp.com/",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Express",
        description:
            "The backent app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Node JS ang ExpressJS.",
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
        subtitle: "Connect Frontend App with MongoDB",
        image: apolloback,
        openLink: "https://todolist-new19.herokuapp.com/graphql",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Apollo",
        description:
            "The backent app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Apollo Server v4.",
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
        subtitle: "Connect Frontend App with MongoDB",
        image: nestback,
        openLink: "https://todolist-new20.herokuapp.com/",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-NestJS",
        description:
            "The backent app helps to connect frontend with MongoDB database. Provides full CRUD operations for users and tasks. Helps organize pagination, sort and search task by paticular parameters. Build with Nest JS",
        tags: ["Node JS", "Nest JS", "Mongoose", "JWT", "Bcrypt"],
    },
];
