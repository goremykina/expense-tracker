import styles from './Button.module.css'

interface ButtonProps {
    text: string
    disabled?: boolean
    variant: 'primary' | 'ghost'
}

export function Button({ text, disabled, variant }: ButtonProps) {
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

    return (
        <button
            className={`${styles.button} ${styles[getVariantClassName()]}  ${disabled ? styles.disabled : ''}`}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
