import React from 'react';

import { Box, Typography } from '@mui/material';

import styles from './skillCard.module.scss';

interface ISkillCard {
    image: string,
    title: string,
}

const SkillCard: React.FC<ISkillCard> = ({ image, title }) => {

    return (
        <Box className={styles.skillCard}>
            <img src={image} alt={title} />
            <Typography className={styles.skillCard_title}>
                {title}
            </Typography>
        </Box>
    )
}

export default SkillCard;