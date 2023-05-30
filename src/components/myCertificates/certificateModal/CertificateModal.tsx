import React from 'react';

import { Box, Modal } from '@mui/material';

import styles from './certificateModal.module.scss';

interface ICertificateModal {
    image: string;
    title: string;
    open: boolean;
    handleClose: () => void;
}

const CertificateModal: React.FC<ICertificateModal> = ({ image, title, open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className={styles.certificateModal}>
                <Box onClick={handleClose} className={styles.close}>&times;</Box>
                <img src={image} width={350} alt={title} />
            </Box>
        </Modal>
    )
}

export default CertificateModal;