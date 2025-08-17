import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthForm } from "../components/AuthForm";
import { FormInput } from "../../../components/FormInput/FormInput.tsx";
import { Button } from "../../../components/Button";
import styles from './RestorePassword.module.css';
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    password: yup.string().min(8, "At least 8 characters").required("Password is required"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm your password"),
});

type SchemaType = yup.InferType<typeof schema>;

export const RestorePassword = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit } = useForm<SchemaType>({
        resolver: yupResolver(schema),
        defaultValues: {
            password: "",
            confirmPassword: ""
        },
        disabled: loading,
    });

    const onSubmit = (data: SchemaType) => {
        setLoading(true);
        try {
            console.log(data);
        } finally {
            setLoading(false);
            navigate('/auth/success')
        }
    };

    return (
        <AuthForm
            title="Forgot password"
        >
            <form
                className={styles['restore-pass-form']}
                onSubmit={handleSubmit(onSubmit)}
            >
                <FormInput
                    label={'Type your new password'}
                    name={"password"}
                    type={"password"}
                    control={control}
                    placeholder={"password"}
                    disabled={loading}
                    showPasswordToggle
                />

                <FormInput
                    label={'Confirm password'}
                    name="confirmPassword"
                    type="password"
                    control={control}
                    placeholder="Confirm password"
                    disabled={loading}
                    showPasswordToggle
                />

                <div className={styles['restore-pass-bnt-wrapper']}>
                    <Button
                        type="submit"
                        disabled={loading}
                        width={"full-width"}
                        variant={"primary"}
                    >
                        Change password
                    </Button>
                </div>

            </form>
        </AuthForm>
    );
};
