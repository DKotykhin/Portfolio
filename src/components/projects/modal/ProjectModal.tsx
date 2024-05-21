import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Modal, Typography, Link } from '@mui/material';

import { IModal } from '../cardTypes';
import ImageSwiper from './ImageSwiper';

import styles from './projectModal.module.scss';

const ProjectModal: React.FC<IModal> = ({ open, handleClose, props }) => {
    
    const { title, imageArray, description, tags, linkArray } = props;
    const { i18n } = useTranslation('projects');

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
                <ImageSwiper imageArray={imageArray} />
                <Typography className={styles.description} sx={imageArray.length < 2 ? { marginTop: '-12px' } : null}>
                    {i18n.language === 'en' ? description.en : description.ua}
                </Typography>
                <Box className={styles.tagBox}>
                    {
                        tags?.map((item, i) => (
                            <Typography key={i} className={styles.tag}>{item}</Typography>
                        ))
                    }
                </Box>
                <Box className={styles.linkBox}>
                    {
                        linkArray.map((item, i) => (
                            <Box key={i} className={styles.link}>
                                <item.icon />
                                <Link href={item.link} target='_blank'>{item.title}</Link>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Modal>
    );
};

export default ProjectModal;