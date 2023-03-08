export interface ICard {
    title: string,
    subtitle: string,
    image: string,
    openLink: string,
    githubLink: string,
    description: string,
    tags: Array<string>
};

export interface IModal {
    handleClose: () => void,
    open: boolean,
    props: ICard,
};