import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import ProjectCard from './ProjectCard';
import { projectList } from './projectList';

import styles from './myProjects.module.scss';


const ProjectsBlock: React.FC = () => {
    return (
        <Box id='projects' className={styles.projects}>
            <Container maxWidth='lg'>
                <Typography className={styles.title}>
                    My Projects
                </Typography>
                <Box className={styles.cardsBox}>
                    {
                        projectList.map(item => (
                            <Box key={item.title} className={styles.cards}>
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