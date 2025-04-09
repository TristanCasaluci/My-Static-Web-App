import Header from './Header'
import styles from './Layout.module.css'

const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
        </>

    );
}
export default Layout;