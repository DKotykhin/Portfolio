import React from 'react';
import linkedIn from "images/social/linkedin.svg";
import telegram from "images/social/telegram.svg";
import github from "images/social/github.svg";

import { Box } from '@mui/system';
import { Container, Typography, Link } from "@mui/material";

import styles from './footer.module.scss';

const Footer: React.FC = () => {
    return (
        <Box className={styles.footer}>
            <Container maxWidth='lg' className={styles.footer__container}>
                <Typography className={styles.footer__right}>
                    &copy; All rights reserved
                </Typography>
                <Box className={styles.footer__social}>
                    <Link href='https://www.linkedin.com/in/dmytro-kotykhin-4683151b' target="_blank">
                        <img src={linkedIn} alt='linkedIn'/>
                    </Link>
                    <Link href='https://t.me/Dmytro_Kotykhin' target="_blank">
                        <img src={telegram} alt='telegram'/>
                    </Link>
                    <Link href='https://github.com/DKotykhin' target="_blank">
                        <img src={github} alt='github'/>
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default Footer;