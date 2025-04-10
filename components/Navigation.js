import styles from "@/components/Navigation.module.css";
import {useGlobalContext} from "@/store";

const Navigation = () => {

    const {session, logout} = useGlobalContext()

    return (
        <>
            <div className={styles.nav}>
                <a href="/" className={styles.link}>Home</a>

                <a href="/posts/create" className={styles.link}>Create</a>
                {session && <a href="/profile" className={styles.link}>Profil</a>}
                {session ? <a href="/login" className={styles.link} onClick={(e) => logout()}>Logout</a> :
                    <a href="/login" className={styles.link}>Login</a>}
            </div>

        </>
    );
}
export default Navigation;