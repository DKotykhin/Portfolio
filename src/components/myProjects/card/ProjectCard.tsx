import React from 'react';

import { Box, Typography, Button } from '@mui/material';

import ProjectModal from '../modal/ProjectModal';
import { ICard } from '../cardTypes';

import styles from './projectCard.module.scss';

const ProjectCard: React.FC<ICard> = (props) => {
    const { title, subtitle, image } = props;

    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleClick = () => setOpen(true);

    return (
        <>
            <Box className={styles.card}>
                <Typography className={styles.title}>
                    {title}
                </Typography>
                <Typography className={styles.subtitle}>
                    {subtitle}
                </Typography>
                <img src={image} alt={image} className={styles.image} width='350px'/>
                <Box className={styles.button}>
                    <Button onClick={handleClick}>See more...</Button>
                </Box>
            </Box>
            <ProjectModal
                handleClose={handleClose}
                open={open}
                props={props}
            />
        </>
    )
};

export default ProjectCard;