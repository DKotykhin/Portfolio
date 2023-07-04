import React from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Box, Container, Typography, Link } from '@mui/material';

import SkillCard from './skillCard/SkillCard';
import { allSkills, cert, ICert, ISkills } from './skillsData';
import { titleVariant } from 'animation/variants';

import styles from './skills.module.scss';

const Skills: React.FC = () => {
    const { t } = useTranslation('skills');

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
                        {t('title_1')}
                    </motion.div>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_subtitle}>
                            {t('subtitle_13')}
                        </Typography>
                        {cert.map((item: ICert) => (
                            <Link key={item.id} href={item.url} target='_blank'>
                                <Typography className={styles.study_cert}>
                                    &#9755;&nbsp;&nbsp;{t(item.text)}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_subtitle}>
                            The Language Gallery, London, UK
                        </Typography>
                        <Typography>
                            {t('text_13')} &#8208; B2 (08.2014)
                        </Typography>
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_subtitle}>
                            {t('subtitle_12')}
                        </Typography>
                        <Typography>
                            Master's degree (09.2006 &#8208; 06.2008)
                        </Typography>
                        <Typography>
                            Master of Business Administration(Executive MBA)
                        </Typography>
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_subtitle}>
                            {t('subtitle_11')}
                        </Typography>
                        <Typography>
                            {t('text_11')} (09.1991 &#8208; 06.1996)
                        </Typography>
                        <Typography >
                            {t('text_12')}
                        </Typography>
                    </Box>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={titleVariant}
                        viewport={{ once: true }}
                        className={styles.hobby_title}
                    >
                        {t('title_2')}
                    </motion.div>
                    <Box className={styles.hobby_textBox}>
                        <Typography>
                            {t('text_21')}
                        </Typography>
                        <Typography>
                            {t('text_22')}
                        </Typography>
                        <Typography>
                            {t('text_23')}
                        </Typography>
                        <Typography>
                            {t('text_24')}
                        </Typography>
                    </Box>
                </Box>
                <Box className={styles.skills_block}>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={titleVariant}
                        viewport={{ once: true }}
                        className={styles.skills_title}
                    >
                        {t('title_3')}
                    </motion.div>
                    <Box className={styles.skills_box}>
                        {
                            allSkills.map(((item: ISkills) => (
                                <SkillCard
                                    key={item.id}
                                    image={item.image}
                                    title={item.title}
                                />
                            )))
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Skills;