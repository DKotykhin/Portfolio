import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import { allSkills } from './skillsData';

import styles from './skills.module.scss';

const Skills: React.FC = () => {
    return (
        <Box id='skills' className={styles.skills}>
            <Container maxWidth='lg'>
                <Typography className={styles.title}>
                    Skills
                </Typography>
                <Box className={styles.container}>
                    {
                        allSkills.map((item => (
                            <Box key={item.id} className={styles.item}>
                                <img src={item.image} alt={item.title} />
                                <Typography className={styles.itemTitle}>
                                    {item.title}
                                </Typography>
                            </Box>
                        )))
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default Skills;