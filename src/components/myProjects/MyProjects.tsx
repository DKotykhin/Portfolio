import React from 'react';

import { motion } from 'framer-motion';

import { Box, Container } from '@mui/material';

import ProjectCard from './card/ProjectCard';
import { projectData } from './projectData';
import { variants } from 'animation/variants';

import styles from './myProjects.module.scss';


const ProjectsBlock: React.FC = () => {
    return (
        <Box id='projects' className={styles.projects}>
            <Container maxWidth='lg'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={variants}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    My Projects
                </motion.div>
                {/* <Typography className={styles.title}>
                    My Projects
                </Typography> */}
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