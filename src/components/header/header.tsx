import styles from './header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <a className={styles.link} href="/students">Alunos</a>
        </header>
    )
}