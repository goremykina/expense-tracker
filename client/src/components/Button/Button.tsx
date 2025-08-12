import styles from './Button.module.css'
import React from "react";

interface ButtonProps {
    text: string
    disabled?: boolean
    variant?: 'primary' | 'ghost',
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    width?: 'full-width' | 'fit-content'
}

export function Button({ text, disabled, variant='primary', onClick, width }: ButtonProps) {
    const getVariantClassName = (): string => {
        switch (variant) {
            case 'primary':
                return 'primary'
            case 'ghost':
                return 'ghost'
            default:
                return ''
        }
    }

    const getWidth = (): string => {
        switch (width) {
            case 'full-width':
                return 'full-width'
            case 'fit-content':
                return 'fit-content'
            default:
                return ''
        }
    }

    return (
        <button
            className={`${styles.button} ${styles[getVariantClassName()]} ${styles[getWidth()]} ${disabled ? styles.disabled : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}
