import styles from './Input.module.css'
import React, { type MouseEventHandler, useState } from 'react'
import { Icon } from "../Icon";
import type { IconName } from "../../assets";

interface InputProps {
    placeholder?: string
    id?: string
    defaultValue?: string
    error?: boolean
    helperText?: string
    type?: string
    leftIcon?: IconName
    rightIcon?: IconName
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    disabled?: boolean,
    onRightIconClick?: MouseEventHandler<HTMLSpanElement> | undefined
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
    onBlur,
    disabled,
    onRightIconClick
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
                    <button className={`${styles.icon} ${styles.iconLeft}`} type={'button'}>
                        <Icon iconName={leftIcon} size={16} color={'neutral'} />
                    </button>
                )}
                <input
                    className={styles.input}
                    type={type}
                    placeholder={placeholder}
                    value={displayValue}
                    onChange={handleOnChange}
                    id={id}
                    onBlur={onBlur}
                    disabled={disabled}
                />
                {rightIcon && (
                    <button className={`${styles.icon} ${styles.iconRight}`} onClick={onRightIconClick} type={'button'}>
                        <Icon iconName={rightIcon} size={16} color={'neutral'} />
                    </button>
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