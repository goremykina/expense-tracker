import Phone from "../../../assets/phone.svg?react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SignUp.module.css";
import { FormInput } from "../../../components/FormInput/FormInput.tsx";
import { Button } from "../../../components/Button";
import { AuthForm } from "../components/AuthForm";
import { Input } from "../../../components/Input";
import { InputLabel } from "../../../components/InputLabel";

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

export const SignUp = () => {
    console.log('sign UP')

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
            title="Welcome Back"
            subtitle="Hello there, create New account"
            image={<Phone />}
        >
            <form
                className={styles["signup-form"]}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    name={"name"}
                    type={"text"}
                    control={control}
                    placeholder={"Your name"}
                    disabled={loading}
                />

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

                <Button
                    type="submit"
                    disabled={loading}
                    width={"full-width"}
                    variant={"primary"}
                >
                    Sign Up
                </Button>

                <div className={styles['signup-form-checkbox']}>
                    <Input type={'checkbox'} id={'signup'} />
                    <InputLabel htmlFor={'signup'} children={
                        <>
                            <span className={styles['signup-inpulabel-p1']}>{'By creating an account your aggree'}</span>
                            <br />
                            <span className={styles['signup-inpulabel-color']}>{'to our  Term and Condtions'}</span>
                        </>
                    } />
                </div>

                <div className={styles["signup-link-wrapper"]}>
                    <span>Have an account? </span>
                    <Link to="/auth/sign-in" className={styles["signup-link"]}>
                        Sign In
                    </Link>
                </div>
            </form>
        </AuthForm>
    );
};
