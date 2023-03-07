import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import { projectList } from './projectList';

import styles from './myProjects.module.scss';
import ProjectCard from './ProjectCard';

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
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    image={item.image}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default ProjectsBlock;