import React from 'react';

import { useForm, Controller } from "react-hook-form";

import { Box, Input, Button, FormControl, FormHelperText, Typography, TextField } from "@mui/material";

import { FormValidation } from './validation';

import styles from './form.module.scss';

interface IFormData {
    name: string,
    email: string,
    message: string,
}

const Form = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormData>(FormValidation);

    const onSubmit = (data: IFormData) => {
        reset();
        console.log(data)
    };

    return (
        <Box className={styles.container}>
            <Typography className={styles.title}>
                Contact with me
            </Typography>
            <Box
                component="form"
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
                    // disabled={!isValid}
                    type="submit"
                >
                    Submit
                </Button>

            </Box>
        </Box>
    )
}

export default Form;