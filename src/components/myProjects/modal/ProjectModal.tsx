import * as React from 'react';

import { Box, Modal, Typography, Link } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

import { IModal } from '../cardTypes';

import styles from './projectModal.module.scss';

const ProjectModal: React.FC<IModal> = ({ open, handleClose, props }) => {
    const { title, image, description, openLink, githubLink, tags } = props;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className={styles.modal}>
                <Box onClick={handleClose} className={styles.close}>&times;</Box>
                <Typography className={styles.title}>
                    {title}
                </Typography>
                <img src={image} alt={image} width='600px' />
                <Typography className={styles.description}>
                    {description}
                </Typography>
                <Box className={styles.tagBox}>
                    {
                        tags?.map((item, i) => (
                            <Typography key={i} className={styles.tag}>{item}</Typography>
                        ))
                    }
                </Box>
                <Box className={styles.linkBox}>
                    <Box className={styles.link}>
                        <LanguageIcon />
                        <Link href={openLink} target='_blank'>Open project</Link>
                    </Box>
                    <Box className={styles.link}>
                        <GitHubIcon />
                        <Link href={githubLink} target='_blank'>Open code</Link>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
};

export default ProjectModal;