import styles from "@/components/Navigation.module.css";
import {useGlobalContext} from "@/store";

const Navigation = () => {

    const {session, logout} = useGlobalContext()

    return (
        <>
            <div className={styles.nav}>
                <a href="/">Home</a>

                <a href="/posts/create">Create</a>
                {session && <a href="/profile">Profil</a>}
                {session ? <a href="/login" onClick={(e) => logout()}>Logout</a> : <a href="/login">Login</a>}
            </div>

        </>
    );
}
export default Navigation;