import Navigation from "@/components/Navigation";
import styles from '@/components/Header.module.css'

const Header = () => {

    return(
        <>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img className={styles.logo} src="../logo_campus_news.png" alt="Campus Logo"/>
                    <h1>CAMPUS NEWS</h1>
                </div>
                <Navigation></Navigation>
            </div>
        </>
    );
}
export default Header