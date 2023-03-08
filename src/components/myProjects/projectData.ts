import coffeedoor from "images/projects/coffeedoor_600x361.webp";
import todolist from "images/projects/todolist_600x361.webp";
import expressback from "images/projects/express_600x361.webp";
import nestback from "images/projects/nest_600x361.webp";
import apolloback from "images/projects/apollo_600x361.webp";
import portfolio from "images/projects/portfolio_600x361.webp";

import { ICard } from "./cardTypes";

export const projectData: Array<ICard> = [
    {
        title: "CoffeeDoor",
        subtitle: "Coffee and Tea Online Shop",
        image: coffeedoor,
        openLink: "https://coffeedoor.space",
        githubLink: "https://github.com/DKotykhin/Coffeedoor-next-Hygraph",
        description: "The description have not filled yet...",
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
        title: "Todolist",
        subtitle: "Easy Todo App",
        image: todolist,
        openLink: "https://mytodolist.fun",
        githubLink: "https://github.com/DKotykhin/TodoList-Frontend-RTK-Query",
        description: "The description have not filled yet...",
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
        title: "Portfolio",
        subtitle: "Dmytro Kotykhin Portfolio",
        image: portfolio,
        openLink: "https://dmytro-kotykhin.netlify.app",
        githubLink: "https://github.com/DKotykhin/Portfolio",
        description: "The description have not filled yet...",
        tags: [
            "React",
            "Typescript",
            "React Hook Form",
            "React Scroll",
            "Framer Motion",
            "MUI",
            "SASS",
        ],
    },
    {
        title: "Express JS Backend for TodoList",
        subtitle: "Connect Frontend App with MongoDB",
        image: expressback,
        openLink: "https://todolist-new17.herokuapp.com/",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Express",
        description: "The description have not filled yet...",
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
        title: "Apollo JS Backend for TodoList",
        subtitle: "Connect Frontend App with MongoDB",
        image: apolloback,
        openLink: "https://todolist-new19.herokuapp.com/graphql",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-Apollo",
        description: "The description have not filled yet...",
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
        title: "Nest JS Backend for TodoList",
        subtitle: "Connect Frontend App with MongoDB",
        image: nestback,
        openLink: "https://todolist-new20.herokuapp.com/",
        githubLink: "https://github.com/DKotykhin/TodoList-Backend-NestJS",
        description: "The description have not filled yet...",
        tags: ["Node JS", "Nest JS", "Mongoose", "JWT", "Bcrypt"],
    },
];
