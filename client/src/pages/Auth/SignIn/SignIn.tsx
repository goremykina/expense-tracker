import Lock from "../../../assets/lock.svg?react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SignIn.module.css";
import { FormInput } from "../../../components/FormInput/FormInput.tsx";
import { Button } from "../../../components/Button";
import { AuthForm } from "../components/AuthForm";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(12, "Password must be at most 12 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/,
            "Password must contain uppercase, lowercase letters and numbers"
        ),
});

type SchemaType = yup.InferType<typeof schema>;

export const SignIn = () => {

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit } = useForm<SchemaType>({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
        disabled: loading,
    });

    const onSubmit = (data: SchemaType) => {
        setLoading(true);
        try {
            console.log("AuthForm submitted:", data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthForm
            title="Welcome to us,"
            subtitle="Hello there, create New account"
            image={<Lock />}
        >
            <form
                className={styles["signin-form"]}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    name={"email"}
                    type={"email"}
                    control={control}
                    placeholder={"Provide your email or phone number"}
                    disabled={loading}
                />

                <FormInput
                    name={"password"}
                    type={"password"}
                    control={control}
                    placeholder={"Your password"}
                    disabled={loading}
                />

                <Link to="/auth/forgot-password" className={styles["signin-link"]}>
                    Forgot your password ?
                </Link>

                <Button
                    type="submit"
                    disabled={loading}
                    width={"full-width"}
                    variant={"primary"}
                >
                    Sign In
                </Button>

                <div className={styles["signin-link-wrapper"]}>
                    <span>Don't have an account? </span>
                    <Link to="/auth/sign-up" className={styles["signin-link-to-signup"]}>
                        Sign Up
                    </Link>
                </div>
            </form>
        </AuthForm>
    );
};
