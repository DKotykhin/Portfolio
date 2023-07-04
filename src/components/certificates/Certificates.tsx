import React from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Box, Container } from '@mui/material';

import { titleVariant } from 'animation/variants';

import { certificateData } from './certificateData';
import CertificateCard from './certificateCard/CertificateCard';

import styles from './certificates.module.scss';

const Certificates: React.FC = () => {

    const { t } = useTranslation('certificates');

    return (
        <Box id='certificates' className={styles.certificates}>
            <Container maxWidth='lg'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={titleVariant}
                    viewport={{ once: true }}
                    className={styles.title}
                >
                    {t('title')}
                </motion.div>
                <Box className={styles.certificatesBox}>
                    {
                        certificateData.map(item => (
                            <Box key={item.id} className={styles.certificateCards}>
                                <CertificateCard
                                    {...item}
                                />
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    )
}

export default Certificates;