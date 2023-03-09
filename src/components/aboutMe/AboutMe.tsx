import React from 'react';

import { motion } from 'framer-motion';

import { Container, Typography, Box, Link, Button } from '@mui/material';

import myPhoto from "images/photo/photo_portfolio_500x666.webp";

import styles from './aboutMe.module.scss';


const AboutMe: React.FC = () => {

    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: .5,
                duration: 1
            }
        },
        hidden: { opacity: 0, scale: 0 }
    };

    return (
        <Box id='aboutMe' className={styles.about}>
            <Container maxWidth='lg'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={variants}
                    viewport={{ once: true }}
                    className={styles.about_title}
                >
                    About Me
                </motion.div>
                {/* <Typography className={styles.about_title}>
                    About Me
                </Typography> */}
                <Box className={styles.about_block}>
                    <img className={styles.about_img} src={myPhoto} alt='myPhoto' width='500px' />
                    <Box className={styles.about_desc}>
                        <Typography className={styles.about_name}>
                            Dmytro Kotykhin
                        </Typography>
                        <Typography className={styles.about_position}>
                            Full - Stack Developer
                        </Typography>
                        <Typography className={styles.about_text}>
                            Open minded and well-organized software developer. Enthusiastically study
                            Javascript, React, GraphQL, Mongo DB and get a great pleasure from programming and gaining new
                            knowledge. Keen to join the development team, run as a Frontend or Fullstack
                            Developer.
                        </Typography>
                        <Link href={require("cv/CV_Dmytro_Kotykhin.pdf")} download='CV_Dmytro_Kotykhin.pdf'>
                            <Button className={styles.about_button}>Download CV</Button>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
};

export default AboutMe;