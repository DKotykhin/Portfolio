import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

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
    linkArray: {
        id: number;
        title: string;
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
        link: string;
    }[];
    tags: Array<string>;
}

export interface IModal {
    handleClose: () => void;
    open: boolean;
    props: ICard;
}
