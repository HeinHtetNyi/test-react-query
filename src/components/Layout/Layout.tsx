import styles from './Layout.module.css'

const Layout = ({children}: any) => {
    return (  
        <div>
            <ol className={styles.links}>
                <li><a href='/home' className={styles.link}>Home</a></li>
                <li><a href='/superheros' className={styles.link}>Super Heros</a></li>
            </ol>
            <div>
                {children}
            </div>
        </div>
    );
}
 
export default Layout;