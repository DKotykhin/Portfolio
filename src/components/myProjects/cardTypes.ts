export interface ICard {
    id: number;
    title: string;
    subtitle: {
        en: string;
        ua: string;
    };
    description: {
        en: string;
        ua: string;
    };
    imageArray: Array<string>;
    openLink: string;
    githubLink: string;
    tags: Array<string>;
}

export interface IModal {
    handleClose: () => void;
    open: boolean;
    props: ICard;
}
