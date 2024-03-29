import ReactCert from "images/certificates/UC-React.webp";
import TypescriptCert from "images/certificates/UC-Typescript.webp";
import NodeJSCert from "images/certificates//UC-NodeJS.webp";
import NodeJSExpressCert from "images/certificates/UC-NodeJS-Express.webp";
import NestJSCert from "images/certificates/UC-NestJS.webp";
import NextJS13Cert from "images/certificates/UC-NextJS-13.webp";
import EnglishCert from "images/certificates/English-certificate.webp";

interface ICertificate {
    id: number;
    title: string;
    image: string;
}

class Certificate implements ICertificate {
    constructor(
        public id: number,
        public title: string,
        public image: string
    ) {}
}

const Cert_1 = new Certificate(1, "Javascript + React", ReactCert);
const Cert_2 = new Certificate(2, "Modern Typescript", TypescriptCert);
const Cert_3 = new Certificate(3, "Basic Node JS", NodeJSCert);
const Cert_4 = new Certificate(
    4,
    "Node JS (Mongo, GraphQL, MySQL)",
    NodeJSExpressCert
);
const Cert_5 = new Certificate(5, "Nest JS Backend", NestJSCert);
const Cert_6 = new Certificate(6, "NextJS 13 + React", NextJS13Cert);
const Cert_7 = new Certificate(7, "Advanced Business English", EnglishCert);

export const certificateData: Array<ICertificate> = [
    Cert_1,
    Cert_2,
    Cert_3,
    Cert_4,
    Cert_5,
    Cert_6,
    Cert_7,
];
