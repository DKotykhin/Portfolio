import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { Container, Box } from '@mui/material';

import { homeVariant } from 'animation/variants';

import styles from './home.module.scss'

const Home: React.FC = () => {
    const { t } = useTranslation('home');
    return (
        <Box id='home' className={styles.home}>
            <Container maxWidth='lg' className={styles.container}>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={1}
                >
                    {t('line_1')}
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={2}
                >
                    {t('line_2')}
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={3}
                >
                    {t('line_3')}
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={4}
                >
                    <Box className={styles.button}>
                        <Link
                            to={'aboutMe'} spy={true} smooth={true} offset={-56} duration={500}
                        >
                            {t('button')}
                        </Link>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Home;