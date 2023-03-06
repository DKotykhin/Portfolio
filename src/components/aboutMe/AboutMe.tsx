import React from 'react';

import { Container, Typography, Box, Link, Button } from '@mui/material';

import myPhoto from "images/photo/photo_portfolio.webp";

import styles from './aboutMe.module.scss';

const AboutMe: React.FC = () => {
    return (
        <Box id='aboutMe' className={styles.about}>
            <Container maxWidth='lg'>
                <Typography className={styles.about_title}>
                    AboutMe
                </Typography>
                <Box className={styles.about_block}>
                    <img className={styles.about_img} src={myPhoto} alt='myPhoto' width='500px' />
                    <Box className={styles.about_desc}>
                        <Typography className={styles.about_name}>
                            Dmytro Kotykhin
                        </Typography>
                        <Typography className={styles.about_position}>
                            Front - End Developer
                        </Typography>
                        <Typography className={styles.about_text}>
                            Open minded and well-organized software developer. Enthusiastically study
                            Javascript, React, get great pleasure from programming and gaining new
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