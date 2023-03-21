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
];
