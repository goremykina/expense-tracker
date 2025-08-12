import * as React from 'react'
import style from './InputLabel.module.css'

interface InputLabel {
    children?: React.ReactNode
    htmlFor: string
}
export function InputLabel({ children, htmlFor }: InputLabel) {
    console.log(children)
    return (
        <>
            <label htmlFor={htmlFor} className={style['input-label']}>
                {'Label'}
                {children}
            </label>
        </>
    )
}
