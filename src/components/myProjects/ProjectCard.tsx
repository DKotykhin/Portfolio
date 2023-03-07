import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import styles from './projectCard.module.scss';

interface ICard {
    title: string,
    subtitle: string,
    image: string,
}

const ProjectCard: React.FC<ICard> = ({ title, subtitle, image }) => {
    return (
        <Box className={styles.card}>
            <Typography className={styles.title}>
                {title}
            </Typography>
            <Typography className={styles.subtitle}>
                {subtitle}
            </Typography>
            <img src={image} alt={image} className={styles.image} />
            <Box className={styles.button}>
                <Button>See more...</Button>
            </Box>
        </Box>
    )
};

export default ProjectCard;