import React from 'react';

import { useTranslation } from 'react-i18next';

import { Typography, Link, Container, Box } from "@mui/material";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
    const { t } = useTranslation('footer');

    return (
        <Box className={styles.footer}>
            <Container className={styles.footer__social}>
                <Link href='https://www.linkedin.com/in/dmytro-kotykhin-4683151b' target="_blank">
                    <LinkedInIcon />
                </Link>
                <Link href='https://t.me/Dmytro_Kotykhin' target="_blank">
                    <TelegramIcon />
                </Link>
                <Link href='https://github.com/DKotykhin' target="_blank">
                    <GitHubIcon />
                </Link>
            </Container>
            <Typography className={styles.footer__right}>
                &copy; 2023 {t('text')}
            </Typography>
        </Box>
    )
};

export default Footer;