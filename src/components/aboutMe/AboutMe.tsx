import React from 'react';

import ReactGA from "react-ga4";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Container, Typography, Box, Link, Button } from '@mui/material';

import myPhoto from "images/photo/photo_portfolio_500x666.webp";
import { titleVariant } from 'animation/variants';

import styles from './aboutMe.module.scss';


const AboutMe: React.FC = () => {
    const { t } = useTranslation('about');

    const handleClick = () => {
        ReactGA.event({
            category: "button",
            action: "click CV",
            label: "CV label",
        });
    }

    return (
        <Box id='aboutMe' className={styles.about}>
            <Container maxWidth='lg'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={titleVariant}
                    viewport={{ once: true }}
                    className={styles.about_title}
                >
                    {t('title')}
                </motion.div>
                <Box className={styles.about_block}>
                    <img className={styles.about_img} src={myPhoto} alt='Dmytro Kotykhin' width='500px' />
                    <Box className={styles.about_desc}>
                        <Typography component='h1' className={styles.about_name}>
                            {t('name')}
                        </Typography>
                        <Typography component='h2' className={styles.about_position}>
                            {t('position')}
                        </Typography>
                        <Typography component='h3' className={styles.about_text}>
                            {t('text')}
                        </Typography>
                        <Link href={require("cv/CV_Dmytro_Kotykhin.pdf")} download='CV_Dmytro_Kotykhin.pdf' target='_blank'>
                            <Button className={styles.about_button} onClick={handleClick}>{t('button')}</Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default AboutMe;