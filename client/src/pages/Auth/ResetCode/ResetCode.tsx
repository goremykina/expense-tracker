import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./ResetCode.module.css";
import { AuthForm } from "../components/AuthForm";
import { FormInput } from "../../../components/FormInput/FormInput.tsx";
import { Button } from "../../../components/Button";

const schema = yup.object({
    code: yup.string().length(6, "Code must be 6 characters").required("Code is required"),
});

type SchemaType = yup.InferType<typeof schema>;

export const ResetCode = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { control, handleSubmit } = useForm<SchemaType>({
        resolver: yupResolver(schema),
        defaultValues: { code: "" },
        disabled: loading,
    });

    const onSubmit = (data: SchemaType) => {
        setLoading(true);
        try {
            console.log(data);
        } finally {
            navigate('/auth/restore-password')
        }
    };

    return (
        <AuthForm
            title="Forgot password"
            subtitle="Type a code"
        >
            <form
                className={styles["reset-pass-form"]}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles['reset-pass-input-code']}>
                    <FormInput
                        name={"code"}
                        type={"text"}
                        control={control}
                        placeholder={"code"}
                        disabled={loading}
                    />

                    <Button
                        type="submit"
                        disabled={loading}
                        width={"full-width"}
                        variant={"primary"}
                    >
                        Resend
                    </Button>
                </div>

                <div className={styles["reset-pass-hint-wrapper"]}>
                    <span>We have texted you a code to verify your phone number
                        <span className={styles["reset-pass-phone-number"]}> (+84) 0398829xxx</span>
                    </span>
                    <br></br>
                    <span>
                        This code expires in 10 minutes.
                    </span>
                </div>

                <Button
                    type="submit"
                    disabled={loading}
                    width={"full-width"}
                    variant={"primary"}
                >
                    Change password
                </Button>

                <Link to="/auth/sign-in" className={styles["reset-pass-link-to-signup"]}>
                    Change your phone number
                </Link>
            </form>
        </AuthForm>
    );
};
