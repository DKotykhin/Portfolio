import React, { useRef } from 'react';
import { useForm, Controller } from "react-hook-form";

import emailjs from '@emailjs/browser';

import { Box, Input, Button, FormControl, FormHelperText, Typography, TextField } from "@mui/material";

import { FormValidation } from './validation';

import styles from './form.module.scss';
import SnackBar from '../snackBar.tsx/SnackBar';

interface IFormData {
    name: string,
    email: string,
    message: string,
}

const SERVICE_ID = process.env.REACT_APP_EMAIL_SERVICE_ID || "";
const TEMPLATE_ID = process.env.REACT_APP_EMAIL_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.REACT_APP_EMAIL_PUBLIC_KEY || "";

const Form: React.FC = () => {

    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormData>(FormValidation);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            setOpen(false);
            // return;
        }
        setOpen(false);
    };

    const onSubmit = (data: IFormData) => {
        reset();
        console.log(data);
        setOpen(true)
        const formData = form.current || "";
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Box className={styles.container}>
            <SnackBar open={open} handleClose={handleClose} />
            <Typography className={styles.title}>
                Contact with me
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
                                    placeholder="your name..."
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
                                    placeholder="your email..."
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
                                    placeholder="your text..."
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
                    Submit
                </Button>

            </Box>
        </Box>
    )
}

export default Form;