import Header from './Header'
import styles from './Layout.module.css'
import Footer from "./Footer";

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
            <Footer />
        </>

    );
}
export default Layout;