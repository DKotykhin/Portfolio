import React from 'react';

import { Box, Typography } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

import styles from './certificateCard.module.scss';
import CertificateModal from '../certificateModal/CertificateModal';

interface ICertificateCard {
    title: string,
    image: string,
}

const CertificateCard: React.FC<ICertificateCard> = ({ title, image }) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => setOpen(false);
    const handleClick = () => setOpen(true);

    return (
        <>
            <Box className={styles.certificateCard}>
                <Typography className={styles.title}>
                    {title}
                </Typography>
                <img src={image} width={350} alt={title} />
                <Box className={styles.icon} onClick={handleClick}>
                    <ZoomInIcon />
                </Box>
            </Box>
            <CertificateModal
                image={image}
                title={title}
                open={open}
                handleClose={handleClose}
            />
        </>
    )
}

export default CertificateCard;