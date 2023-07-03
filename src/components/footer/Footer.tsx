import React from 'react';

import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import { Typography, Link, Box } from "@mui/material";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './footer.module.scss';

enum link {
    linkedin = 'https://www.linkedin.com/in/dmytro-kotykhin-4683151b',
    telegram = 'https://t.me/Dmytro_Kotykhin',
    gitHub = 'https://github.com/DKotykhin',
}

const Footer: React.FC = () => {
    const { t } = useTranslation('footer');

    return (
        <Box className={styles.footer}>
            <Box className={styles.footer__social}>
                <Link href={link.linkedin} target="_blank">
                    <LinkedInIcon />
                </Link>
                <Link href={link.telegram} target="_blank">
                    <TelegramIcon />
                </Link>
                <Link href={link.gitHub} target="_blank">
                    <GitHubIcon />
                </Link>
            </Box>
            <Typography className={styles.footer__right}>
                Copyright &copy; {format(new Date(), 'yyyy')} &nbsp;&nbsp;{t('text')}
            </Typography>
        </Box>
    )
};

export default Footer;