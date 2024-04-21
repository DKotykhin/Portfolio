import ReactCert from "images/certificates/UC-React.webp";
import TypescriptCert from "images/certificates/UC-Typescript.webp";
import NodeJSCert from "images/certificates//UC-NodeJS.webp";
import NodeJSExpressCert from "images/certificates/UC-NodeJS-Express.webp";
import NestJSCert from "images/certificates/UC-NestJS.webp";
import NextJS13Cert from "images/certificates/UC-NextJS-13.webp";
import EnglishCert from "images/certificates/English-certificate.webp";
import DockerCert from "images/certificates/UC-Docker.webp";

export interface ICertificate {
    id: number;
    title: string;
    image: string;
    url: string;
}

class Certificate implements ICertificate {
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public url: string,
    ) {}
}

const Cert_1 = new Certificate(1, "Javascript + React", ReactCert, "https://www.udemy.com/course/javascript_full");
const Cert_2 = new Certificate(2, "Modern Typescript", TypescriptCert, "https://www.udemy.com/course/modern_typescript");
const Cert_3 = new Certificate(3, "Basic Node JS", NodeJSCert, "https://www.udemy.com/course/nodejs-start");
const Cert_4 = new Certificate(
    4,
    "Node JS (Mongo, GraphQL, MySQL)",
    NodeJSExpressCert, "https://www.udemy.com/course/nodejs-full-guide"
);
const Cert_5 = new Certificate(5, "Nest JS Backend", NestJSCert, "https://www.udemy.com/course/nestjs-backend-typescript-node-js");
const Cert_6 = new Certificate(6, "NextJS 13 + React", NextJS13Cert, "https://www.udemy.com/course/react-nextjs");
const Cert_7 = new Certificate(7, "Docker - Full course", DockerCert, "https://www.udemy.com/course/docker-ru");
const Cert_8 = new Certificate(8, "Advanced Business English", EnglishCert, "https://www.englishdom.com/ua");

export const certificateData: Array<ICertificate> = [
    Cert_1,
    Cert_2,
    Cert_3,
    Cert_4,
    Cert_5,
    Cert_6,
    Cert_7,
    Cert_8,
];
