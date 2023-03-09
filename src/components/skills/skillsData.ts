import htmlIcon from "images/skillsIcons/html5.png";
import cssIcon from "images/skillsIcons/css3.png";
import jsIcon from "images/skillsIcons/javascript.png";
import reactIcon from "images/skillsIcons/react.png";
import reduxIcon from "images/skillsIcons/redux.png";
import tsIcon from "images/skillsIcons/typescript.png";
import nextjsIcon from "images/skillsIcons/nextjs.svg";
import graphqlIcon from "images/skillsIcons/graphql.webp";
import nestjsIcon from "images/skillsIcons/nestjs.svg";
import apolloIcon from "images/skillsIcons/apollo.svg";
import nodejsIcon from "images/skillsIcons/nodejs.svg";
import gitIcon from "images/skillsIcons/github.svg";
import sassIcon from "images/skillsIcons/sass.png";
import materialUiIcon from "images/skillsIcons/materialUi.png";
import hygraphIcon from "images/skillsIcons/hygraph.webp";
import mongodbIcon from "images/skillsIcons/mongodb.svg";

export interface ISkills {
    id: number;
    image: string;
    title: string;
}

export const allSkills:Array<ISkills> = [
    {
        id: 1,
        image: htmlIcon,
        title: "HTML",
    },
    {
        id: 2,
        image: jsIcon,
        title: "Javascript",
    },
    {
        id: 3,
        image: cssIcon,
        title: "CSS",
    },
    {
        id: 4,
        image: reactIcon,
        title: "React",
    },
    {
        id: 5,
        image: reduxIcon,
        title: "Redux",
    },
    {
        id: 6,
        image: tsIcon,
        title: "Typescript",
    },
    {
        id: 7,
        image: nextjsIcon,
        title: "Next JS",
    },
    {
        id: 8,
        image: graphqlIcon,
        title: "GraphQL",
    },
    {
        id: 9,
        image: nestjsIcon,
        title: "Nest JS",
    },
    {
        id: 10,
        image: apolloIcon,
        title: "Apollo",
    },
    {
        id: 11,
        image: nodejsIcon,
        title: "Node JS",
    },
    {
        id: 12,
        image: gitIcon,
        title: "GitHub",
    },
    {
        id: 13,
        image: sassIcon,
        title: "SaSS",
    },
    {
        id: 14,
        image: materialUiIcon,
        title: "Material UI",
    },
    {
        id: 15,
        image: hygraphIcon,
        title: "Hygraph",
    },
    {
        id: 16,
        image: mongodbIcon,
        title: "Mongo DB",
    },
];
