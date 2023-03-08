import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Enter letters!")
        .min(2, "Minimum 2 characters to fill!")
        .required("Required field!"),
    email: yup
        .string()
        .email("Wrong email address!")
        .required("Required field!"),
    message: yup
        .string()
        .required("Required field!")
        .min(8, "Minimum 8 characters to fill!"),
});

export const FormValidation: Object = {
    defaultValues: {
        name: "",
        email: "",
        message: "",
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
};
