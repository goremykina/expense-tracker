import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import Safe from '../../../assets/safe.svg?react';
import styles from './Success.module.css'
import { AuthForm } from "../components/AuthForm";

export const Success = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/auth/sign-in')
    };

    return (
        <AuthForm>
            <div className={styles['success']}>
                <Safe/>

                <h2 className={styles['success-h2']}>Change password successfully!</h2>

                <span>
                    You have successfully change password.<br></br>
                    Please use the new password when Sign in.
                </span>
                <Button
                    type="submit"
                    width={"full-width"}
                    variant={"primary"}
                    onClick={onSubmit}
                >
                    Ok
                </Button>
            </div>
        </AuthForm>
    );
};
