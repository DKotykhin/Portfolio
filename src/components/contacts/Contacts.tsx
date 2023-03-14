import React from 'react';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { Box, Container, Typography, Link } from '@mui/material';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Form from './form/Form';
import { titleVariant } from 'animation/variants';

import styles from './contacts.module.scss';


const Contacts: React.FC = () => {
    const { t } = useTranslation('contacts');

    return (
        <Box id='contacts' className={styles.contacts}>
            <Container maxWidth='lg'>
                <motion.div
                    initial='hidden'
                    whileInView='visible'
                    variants={titleVariant}
                    viewport={{ once: true }}
                    className={styles.contacts_title}
                >
                    {t('title')}
                </motion.div>
                <Box className={styles.contacts_block}>
                    <Form />
                    <Box>
                        <Box className={styles.contacts_box}>
                            <LocalPhoneOutlinedIcon />
                            <Typography className={styles.contacts_text}>
                                {t('tel')}
                                <Link                                    
                                    href="tel:48721810244"
                                >
                                    +48 721 810 244
                                </Link>
                            </Typography>
                        </Box>
                        <Box className={styles.contacts_box}>
                            <EmailOutlinedIcon />
                            <Typography className={styles.contacts_text}>
                                Email:
                                <Link                                    
                                    href="mailto:kotykhin.d@gmail.com"
                                >
                                    kotykhin.d@gmail.com
                                </Link>
                            </Typography>
                        </Box>
                        <Box className={styles.contacts_box}>
                            <LocationOnOutlinedIcon />
                            <Typography className={styles.contacts_text}>
                                {t('location')}
                                <Link
                                    href="https://goo.gl/maps/4zJGiVenVpuipotc7"
                                    target='_blank'
                                >
                                    {t('location_content')}
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Contacts;