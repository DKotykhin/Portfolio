import * as React from 'react';

import { Box, Modal, Typography, Link } from '@mui/material';

import styles from './projectModal.module.scss';


interface IModal {
    handleClose: () => void,
    open: boolean,
    props: {
        title: string,
        image: string,
        openLink: string,
        githubLink: string,
        description: string,
    }
};

const ProjectModal: React.FC<IModal> = ({ open, handleClose, props }) => {
    const { title, image, description, openLink, githubLink } = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className={styles.modal}>
                <Typography className={styles.title}>
                    {title}
                </Typography>
                <img src={image} alt={image} />
                <Typography className={styles.description}>
                    {description}
                </Typography>
                <Box className={styles.link}>
                    <Link href={openLink} target='_blank'>Open project...</Link>
                    <Link href={githubLink} target='_blank'>Open gitHub...</Link>
                </Box>
            </Box>
        </Modal>
    );
};

export default ProjectModal;