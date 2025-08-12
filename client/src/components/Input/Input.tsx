import styles from './Input.module.css'
import React, { useState } from 'react'
import { Icon } from "../Icon";
import type { IconName } from "../../assets";

interface InputProps {
    placeholder: string
    id: string
    defaultValue?: string
    error?: boolean
    helperText?: string
    type?: string
    leftIcon?: IconName
    rightIcon?: IconName
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
    value,
    onChange,
}: InputProps) {
    const [internalValue, setInternalValue] = useState(defaultValue || '')
    const isControlled = value !== undefined
    const displayValue = isControlled ? value : internalValue

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
            setInternalValue(e.target.value)
        }

        if (onChange) {
            onChange(e)
        }
    }

    return (
        <div className={styles.inputWrapper}>
            <div className={styles.inputContainer}>
                {leftIcon && (
                    <span className={styles.iconLeft}>{<Icon iconName={leftIcon} size={16}/>}</span>
                )}
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    value={displayValue}
                    onChange={handleOnChange}
                    id={id}
                />
                {rightIcon && (
                    <span className={styles.iconRight}>{<Icon iconName={rightIcon} size={16}/>}</span>
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