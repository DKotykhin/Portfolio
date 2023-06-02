import ReactCert from "images/certificates/UC-React_800.webp";
import TypescriptCert from "images/certificates/UC-Typescript_800.webp";
import NodeJSCert from "images/certificates/UC-NodeJS_800.webp";
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
const Cert_4 = new Certificate(4, "Advanced Business English", EnglishCert);

export const certificateData: Array<ICertificate> = [
    Cert_1,
    Cert_2,
    Cert_3,
    Cert_4,
];
