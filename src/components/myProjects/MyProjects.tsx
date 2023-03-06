import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import styles from './myProjects.module.scss';

const ProjectsBlock: React.FC = () => {
    return (
        <Box id='projects' className={styles.projects}>
            <Container maxWidth='lg'>
                <Typography className={styles.title}>
                    My Projects
                </Typography>
            </Container>
        </Box>
    )
}

export default ProjectsBlock;