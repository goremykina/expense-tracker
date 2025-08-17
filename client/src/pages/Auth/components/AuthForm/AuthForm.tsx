import { Logo } from "../../../../components/Logo";
import styles from "./AuthForm.module.css";
import React from "react";
import Piggy from "../../../../assets/piggy-bank.svg?react"

interface AuthFormLayoutProps {
    title?: string;
    subtitle?: string;
    image?: React.ReactNode;
    children: React.ReactNode; // сюда пойдет <form> с полями
}

export function AuthForm({
    title,
    subtitle,
    image,
    children,
}: AuthFormLayoutProps) {
    return (
        <div className={styles['auth-wrapper']}>
            <div className={styles["auth-form-img-wrapper"]}>
                <Logo size="large" />
                <Piggy />
            </div>

            <div className={styles["auth-form-wrapper"]}>
                <h2 className={styles['auth-form-title']}>
                    {title}
                </h2>
                {subtitle && <span>{subtitle}</span>}

                {image && (
                    <span className={styles["auth-form-img"]}>{image}</span>
                )}
                {children}
            </div>
        </div>
    );
}
