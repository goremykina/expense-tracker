import  { Logo } from '../Logo'
import  styles from  './Header.module.css'

export function Header() {
    return (
        <header className={styles['app-header']}>
            <Logo />
        </header>
    )
}
