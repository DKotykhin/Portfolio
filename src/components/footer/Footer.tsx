import React from 'react';

import { Box } from '@mui/system';
import { Typography, Link } from "@mui/material";

import linkedIn from "images/social/linkedin.svg";
import telegram from "images/social/telegram.svg";
import github from "images/social/github.svg";

import styles from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <Box className={styles.footer}>
            <Box className={styles.footer__social}>
                <Link href='https://www.linkedin.com/in/dmytro-kotykhin-4683151b' target="_blank">
                    <img src={linkedIn} alt='linkedIn' />
                </Link>
                <Link href='https://t.me/Dmytro_Kotykhin' target="_blank">
                    <img src={telegram} alt='telegram' />
                </Link>
                <Link href='https://github.com/DKotykhin' target="_blank">
                    <img src={github} alt='github' />
                </Link>
            </Box>
            <Typography className={styles.footer__right}>
                Copyright &copy;2023 All rights reserved
            </Typography>
        </Box>
    )
};

export default Footer;