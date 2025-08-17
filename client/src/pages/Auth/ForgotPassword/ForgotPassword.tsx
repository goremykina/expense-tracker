import Lock from "../../../assets/lock.svg?react";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./ForgotPassword.module.css";
import { AuthForm } from "../components/AuthForm";
import { FormInput } from "../../../components/FormInput/FormInput.tsx";
import { Button } from "../../../components/Button";

const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
});

type SchemaType = yup.InferType<typeof schema>;

export const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm<SchemaType>({
        resolver: yupResolver(schema),
        defaultValues: {
            email: ""
        },
        disabled: loading,
    });

    const onSubmit = (data: SchemaType) => {
        setLoading(true);
        try {
            console.log("AuthForm submitted:", data);

        } finally {
            navigate('/auth/reset-code')
            setLoading(false);
        }
    };

    return (
        <AuthForm
            title="Forgot password"
            subtitle="We will text you a code to verify it’s you"
            image={<Lock />}
        >
            <form
                className={styles["forgot-pass-form"]}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    name={"email"}
                    type={"email"}
                    control={control}
                    placeholder={"email or phone number"}
                    disabled={loading}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    width={"full-width"}
                    variant={"primary"}
                >
                    Send
                </Button>

                <div className={styles["forgot-pass-link-wrapper"]}>
                    <span>Have an account? </span>
                    <Link to="/auth/sign-in" className={styles["forgot-pass-link-to-signup"]}>
                        Sign in
                    </Link>
                </div>
            </form>
        </AuthForm>
    );
};
