import * as React from 'react';

import { Box, Modal, Typography, Link } from '@mui/material';

import styles from './projectModal.module.scss';

const style = {
    bgcolor: 'background.paper',
    boxShadow: 24,
};

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
}

const ProjectModal: React.FC<IModal> = ({ open, handleClose, props }) => {
    const { title, image, description, openLink, githubLink } = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style} className={styles.modal}>
                <Typography className={styles.title}>
                    {title}
                </Typography>
                <Box>
                    <img src={image} alt={image} />
                </Box>
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