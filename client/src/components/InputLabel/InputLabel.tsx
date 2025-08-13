import * as React from 'react'
import style from './InputLabel.module.css'

interface InputLabel {
    children?: React.ReactNode
    htmlFor: string
}
export function InputLabel({ children, htmlFor }: InputLabel) {
    return (
        <>
            <label htmlFor={htmlFor} className={style['input-label']}>
                {children}
            </label>
        </>
    )
}
