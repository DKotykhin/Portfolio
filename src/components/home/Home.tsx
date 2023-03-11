import React from 'react';

import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import { Container, Box } from '@mui/material';

import { homeVariant } from 'animation/variants';

import styles from './home.module.scss'

const Home: React.FC = () => {

    return (
        <Box id='home' className={styles.home}>
            <Container maxWidth='lg' className={styles.container}>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={1}
                >
                    Hello,
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={2}
                >
                    I am Dmytro Kotykhin
                </motion.div>
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={homeVariant}
                    custom={3}
                >
                    Full - Stack Developer
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
                            See Who I'm
                        </Link>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    )
}

export default Home;