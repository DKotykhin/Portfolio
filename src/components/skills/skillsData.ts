import htmlIcon from "images/skillsIcons/html5.png";
import cssIcon from "images/skillsIcons/css3.png";
import jsIcon from "images/skillsIcons/javascript.png";
import reactIcon from "images/skillsIcons/react.svg";
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
import motionIcon from "images/skillsIcons/framer-motion.svg";
import swiperIcon from "images/skillsIcons/swiper-logo.svg";
import reactFormIcon from "images/skillsIcons/react-hook-form.png";
import expressIcon from "images/skillsIcons/express-js_100.png";

export interface ISkills {
    id: number;
    image: string;
    title: string;
}

class Skills implements ISkills {
    constructor(
        public id: number,
        public image: string,
        public title: string
    ) {}
}

const HTML = new Skills(1, htmlIcon, "HTML");
const Javascript = new Skills(2, jsIcon, "Javascript");
const CSS = new Skills(3, cssIcon, "CSS");
const React = new Skills(4, reactIcon, "React");
const Redux = new Skills(5, reduxIcon, "Redux");
const Typescript = new Skills(6, tsIcon, "Typescript");
const NextJS = new Skills(7, nextjsIcon, "Next JS");
const GraphQL = new Skills(8, graphqlIcon, "GraphQL");
const NestJS = new Skills(9, nestjsIcon, "Nest JS");
const Apollo = new Skills(10, apolloIcon, "Apollo");
const NodeJS = new Skills(11, nodejsIcon, "Node JS");
const GitHub = new Skills(12, gitIcon, "GitHub");
const SaSS = new Skills(13, sassIcon, "SaSS");
const MaterialUI = new Skills(14, materialUiIcon, "Material UI");
const Hygraph = new Skills(15, hygraphIcon, "Hygraph");
const MongoDB = new Skills(16, mongodbIcon, "Mongo DB");
const FramerMotion = new Skills(17, motionIcon, "Motion");
const Swiper = new Skills(18, swiperIcon, "Swiper");
const ReactHookForms = new Skills(19, reactFormIcon, "ReactForms");
const Express = new Skills(20, expressIcon, "Express");

export const allSkills: Array<ISkills> = [
    HTML,
    Javascript,
    CSS,
    React,
    Redux,
    Typescript,
    NextJS,
    GraphQL,
    NestJS,
    Apollo,
    NodeJS,
    GitHub,
    SaSS,
    MaterialUI,
    Hygraph,
    MongoDB,
    FramerMotion,
    Swiper,
    ReactHookForms,
    Express,
];

export interface ICert {
    id: number;
    text: string;
    url: string;
}

export const cert: ICert[] = [
    {
        id: 1,
        text: "cert_1",
        url: "https://www.udemy.com/course/javascript_full",
    },
    {
        id: 2,
        text: "cert_2",
        url: "https://www.udemy.com/course/react-nextjs",
    },
    {
        id: 3,
        text: "cert_3",
        url: "https://www.udemy.com/course/modern_typescript",
    },
    {
        id: 4,
        text: "cert_4",
        url: "https://www.udemy.com/course/nodejs-start",
    },
    {
        id: 5,
        text: "cert_5",
        url: "https://www.udemy.com/course/nodejs-full-guide",
    },
    {
        id: 6,
        text: "cert_6",
        url: "https://www.udemy.com/course/nestjs-backend-typescript-node-js",
    },
];
