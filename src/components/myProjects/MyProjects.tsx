import React from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Box, Container } from '@mui/material';

import ProjectCard from './card/ProjectCard';
import { projectData } from './projectData';
import { titleVariant } from 'animation/variants';

import styles from './myProjects.module.scss';


const ProjectsBlock: React.FC = () => {
    const { t } = useTranslation('projects');

    return (
        <Box id='projects' className={styles.projects}>
            <Container maxWidth='lg'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={titleVariant}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    {t('title')}
                </motion.div>
                <Box className={styles.cardsBox}>
                    {
                        projectData.map(item => (
                            <Box key={item.id} className={styles.cards}>
                                <ProjectCard
                                    {...item}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    )
};

export default ProjectsBlock;