export interface ICard {
    id: number,
    title: string,
    subtitleEn: string,
    subtitleUkr: string,
    image: string,
    openLink: string,
    githubLink: string,
    descriptionEn: string,
    descriptionUkr: string,
    tags: Array<string>
};

export interface IModal {
    handleClose: () => void,
    open: boolean,
    props: ICard,
};