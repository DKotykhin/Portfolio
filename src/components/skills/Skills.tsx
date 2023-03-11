import React from 'react';

import { motion } from 'framer-motion';

import { Box, Container, Typography } from '@mui/material';

import { allSkills, ISkills } from './skillsData';
import { titleVariant } from 'animation/variants';

import styles from './skills.module.scss';

const Skills: React.FC = () => {
    return (
        <Box id='skills' className={styles.skills}>
            <Container maxWidth='lg' className={styles.skills_container}>
                <Box className={styles.study_block}>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={titleVariant}
                        viewport={{ once: true }}
                        className={styles.study_title}
                    >
                        My Education
                    </motion.div>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_text}>
                            Kharkiv National University of Radioelectronics
                        </Typography>
                        <Typography className={styles.study_subtext}>
                            Master's degree (09.1991 &#8208; 06.1996)
                        </Typography>
                        <Typography className={styles.study_subtext}>
                            Electronic technics engeneer
                        </Typography>
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_text}>
                            International Institute of Business, Kyiv
                        </Typography>
                        <Typography className={styles.study_subtext}>
                            Master's degree (09.2006 &#8208; 06.2008)
                        </Typography>
                        <Typography className={styles.study_subtext}>
                            Master of Business Administration
                        </Typography>
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_text}>
                            The Language Gallery, London
                        </Typography>
                        <Typography className={styles.study_subtext}>
                            English &#8208; B2 (08.2014)
                        </Typography>
                    </Box>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={titleVariant}
                        viewport={{ once: true }}
                        className={styles.study_title}
                    >
                        My Hobby
                    </motion.div>
                    <Typography className={styles.hobby_subtext}>
                        Learned programming ATmega and STM32 microprocessors. Studied the basics of C\C++
                    </Typography>
                    <Typography className={styles.hobby_subtext}>
                        Interest in radioelectronic
                    </Typography>
                    <Typography className={styles.hobby_subtext}>
                        Love to ride a bike
                    </Typography>
                    <Typography className={styles.hobby_subtext}>
                        Love to travel
                    </Typography>
                </Box>
                <Box className={styles.skills_block}>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={titleVariant}
                        viewport={{ once: true }}
                        className={styles.skills_title}
                    >
                        Skills
                    </motion.div>
                    <Box className={styles.skills_box}>
                        {
                            allSkills.map(((item: ISkills) => (
                                <Box key={item.id} className={styles.skills_item}>
                                    <img src={item.image} alt={item.title} />
                                    <Typography className={styles.skills_itemTitle}>
                                        {item.title}
                                    </Typography>
                                </Box>
                            )))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Skills;