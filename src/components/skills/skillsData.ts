import htmlIcon from "images/skillsIcons/html5.png";
import sassIcon from "images/skillsIcons/sass.png";
import jsIcon from "images/skillsIcons/javascript.png";
import reactIcon from "images/skillsIcons/react.svg";
import reduxIcon from "images/skillsIcons/redux.png";
import tsIcon from "images/skillsIcons/typescript.png";
import nextjsIcon from "images/skillsIcons/nextjs.svg";
import graphqlIcon from "images/skillsIcons/graphql.webp";
import nestjsIcon from "images/skillsIcons/nestjs.svg";
import apolloIcon from "images/skillsIcons/apollo.svg";
import nodejsIcon from "images/skillsIcons/nodejs.svg";
import gitIcon from "images/skillsIcons/git-logo.png";
import SQLIcon from "images/skillsIcons/SQL.png";
import materialUiIcon from "images/skillsIcons/materialUi.png";
import hygraphIcon from "images/skillsIcons/hygraph.webp";
import mongodbIcon from "images/skillsIcons/mongodb.svg";
import vueIcon from "images/skillsIcons/vue.png";
import nuxtIcon from "images/skillsIcons/nuxt.png";
import AWSIcon from "images/skillsIcons/AWS.jpeg";
import prismaIcon from "images/skillsIcons/prisma.png";

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
const Javascript = new Skills(2, jsIcon, "JavaScript");
const SaSS = new Skills(3, sassIcon, "SASS");
const React = new Skills(4, reactIcon, "React");
const Redux = new Skills(5, reduxIcon, "Redux");
const Typescript = new Skills(6, tsIcon, "TypeScript");
const NextJS = new Skills(7, nextjsIcon, "Next JS");
const GraphQL = new Skills(8, graphqlIcon, "GraphQL");
const NestJS = new Skills(9, nestjsIcon, "Nest JS");
const Apollo = new Skills(10, apolloIcon, "Apollo");
const NodeJS = new Skills(11, nodejsIcon, "Node JS");
const Git = new Skills(12, gitIcon, "Git");
const SQL = new Skills(13, SQLIcon, "SQL");
const MaterialUI = new Skills(14, materialUiIcon, "Material UI");
const Hygraph = new Skills(15, hygraphIcon, "Hygraph");
const MongoDB = new Skills(16, mongodbIcon, "Mongo DB");
const Vue = new Skills(17, vueIcon, "Vue JS");
const Nuxt = new Skills(18, nuxtIcon, "Nuxt 3");
const AWS = new Skills(19, AWSIcon, "AWS");
const Prisma = new Skills(20, prismaIcon, "Prisma");

export const allSkills: Array<ISkills> = [
    HTML,
    Javascript,
    SaSS,
    React,
    Redux,
    Typescript,
    NextJS,
    Vue,
    Nuxt,
    NodeJS,
    NestJS,
    SQL,
    MongoDB,
    GraphQL,
    Apollo,
    Git,
    MaterialUI,
    Hygraph,
    AWS,
    Prisma,
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
    {
        id: 7,
        text: "cert_7",
        url: "https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend",
    },
];
