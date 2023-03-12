import React from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Box, Container, Typography } from '@mui/material';

import { allSkills, ISkills } from './skillsData';
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
                            {t('subtitle_11')}
                        </Typography>
                        <Typography className={styles.study_text}>
                            {t('text_11')} (09.1991 &#8208; 06.1996)
                        </Typography>
                        <Typography className={styles.study_text}>
                            {t('text_12')}
                        </Typography>
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_subtitle}>
                            {t('subtitle_12')}
                        </Typography>
                        <Typography className={styles.study_text}>
                            Master's degree (09.2006 &#8208; 06.2008)
                        </Typography>
                        <Typography className={styles.study_text}>
                            Master of Business Administration(Executive MBA)
                        </Typography>
                    </Box>
                    <Box className={styles.study_textBox}>
                        <Typography className={styles.study_subtitle}>
                            The Language Gallery, London, UK
                        </Typography>
                        <Typography className={styles.study_text}>
                            {t('text_13')} &#8208; B2 (08.2014)
                        </Typography>
                    </Box>
                    <motion.div
                        initial='hidden'
                        whileInView='visible'
                        variants={titleVariant}
                        viewport={{ once: true }}
                        className={styles.study_title}
                    >
                        {t('title_2')}
                    </motion.div>
                    <Typography className={styles.hobby_text}>
                        {t('text_21')}
                    </Typography>
                    <Typography className={styles.hobby_text}>
                        {t('text_22')}
                    </Typography>
                    <Typography className={styles.hobby_text}>
                        {t('text_23')}
                    </Typography>
                    <Typography className={styles.hobby_text}>
                        {t('text_24')}
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
                        {t('title_3')}
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