import React from 'react';

import { Box, Container, Typography, Link } from '@mui/material';

import Form from './form/Form';

import phone from "images/contacts/phone.png";
import email from "images/contacts/email.png";
import location from "images/contacts/location.png";

import styles from './contacts.module.scss';

const Contacts: React.FC = () => {
    return (
        <Box id='contacts' className={styles.contacts}>
            <Container maxWidth='lg'>
                <Typography className={styles.contacts_title}>
                    Contacts
                </Typography>
                <Box className={styles.contacts_block}>
                    <Form/>
                    <Box>
                        <Box className={styles.contacts_box}>
                            <img src={phone} alt='phone' width='50px'/>
                            <Typography className={styles.contacts_text}>
                                Phone: 
                                <Link className={styles.contacts_link} href="tel:48721810244">+48 721 810 244</Link>
                            </Typography>
                        </Box>
                        <Box className={styles.contacts_box}>
                            <img src={email} alt='email' width='50px'/>
                            <Typography className={styles.contacts_text}>
                                Email: 
                                <Link className={styles.contacts_link} href="mailto:kotykhin.d@gmail.com">kotykhin.d@gmail.com</Link>
                            </Typography>
                        </Box>
                        <Box className={styles.contacts_box}>
                            <img src={location} alt='location' width='50px'/>
                            <Typography className={styles.contacts_text}>
                                Address: 
                                <Link className={styles.contacts_link} href="https://goo.gl/maps/4zJGiVenVpuipotc7" target='_blank'>Warszawa</Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Contacts;