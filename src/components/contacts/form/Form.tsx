import React, { useRef } from 'react';

import { useTranslation } from 'react-i18next';
import { useForm, Controller } from "react-hook-form";

import emailjs from '@emailjs/browser';

import { Box, Input, Button, FormControl, FormHelperText, Typography, TextField } from "@mui/material";

import { FormValidation } from './validation';
import SnackBar from '../snackBar.tsx/SnackBar';
import SimpleBackdrop from '../backdrop/Backdrop';

import styles from './form.module.scss';

interface IFormData {
    name: string,
    email: string,
    message: string,
}

const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID || "";
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY || "";

const Form: React.FC = () => {

    const [snackBarOpen, setSnackBarOpen] = React.useState(false);
    const [backdropOpen, setBackdropOpen] = React.useState(false);
    const [sendError, setSendError] = React.useState(false);
    const { t } = useTranslation('contacts');
    const form = useRef();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormData>(FormValidation);

    const snackBarhandleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            setSnackBarOpen(false);
            // return;
        }
        setSnackBarOpen(false);
    };

    const backdropHandleClose = () => setBackdropOpen(false)

    const onSubmit = (data: IFormData) => {
        // console.log(data);
        setSendError(false);
        setBackdropOpen(true)
        const formData = form.current || "";
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((result) => {
                reset();
                setSnackBarOpen(true);
                setBackdropOpen(false);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                setBackdropOpen(false);
                setSendError(true);
                setSnackBarOpen(true);
            });
    };

    return (
        <Box className={styles.container}>
            <SnackBar open={snackBarOpen} handleClose={snackBarhandleClose} error={sendError} />
            <SimpleBackdrop open={backdropOpen} handleClose={backdropHandleClose} />
            <Typography className={styles.title}>
                {t('subtitle')}
            </Typography>
            <Box
                component="form"
                ref={form}
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
            >
                <Box className={styles.field}>
                    <FormControl>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder={t('placeholder_1') || "your name..."}
                                    autoComplete="name"
                                    error={errors.name ? true : false}
                                    className={styles.input}
                                />
                            )}
                        />
                        <FormHelperText>{errors.name?.message}</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="text"
                                    placeholder={t('placeholder_2') || "your email..."}
                                    autoComplete="email"
                                    error={errors.email ? true : false}
                                    className={styles.input}
                                />
                            )}
                        />
                        <FormHelperText>{errors.email?.message}</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    multiline
                                    maxRows={6}
                                    placeholder={t('placeholder_3') || "your message..."}
                                    error={errors.message ? true : false}
                                    className={styles.textarea}
                                />
                            )}
                        />
                        <FormHelperText>{errors.message?.message}</FormHelperText>
                    </FormControl>
                </Box>

                <Button
                    className={styles.submit}
                    type="submit"
                >
                    {t('button')}
                </Button>
            </Box>
        </Box>
    )
}

export default Form;