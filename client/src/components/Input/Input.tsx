import styles from './Input.module.css'
import React, { useState } from 'react'

interface InputProps {
    placeholder: string
    defaultValue?: string
    error?: boolean
    helperText?: string
    type?: string
    id: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}
export function Input({
    placeholder,
    defaultValue,
    error,
    helperText,
    type,
    id,
    leftIcon,
    rightIcon,
}: InputProps) {
    const [value, setValue] = useState(defaultValue || '')
    console.log(value)

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
                {leftIcon && (
                    <span className={styles.iconLeft}>{leftIcon}</span>
                )}
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    id={id}
                />
                {rightIcon && (
                    <span className={styles.iconRight}>{rightIcon}</span>
                )}
            </div>

            {helperText && (
                <span
                    className={`${styles.helperText} ${error ? styles.errorText : ''}`}
                >
                    {helperText}
                </span>
            )}
        </div>
    )
}
