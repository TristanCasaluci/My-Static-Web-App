import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.nav}>
            <a href="/about">About</a>
            <a href="/impressum">Impressum</a>
        </div>
    )
}
export default Footer;