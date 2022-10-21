import { Outlet } from "react-router-dom";

import styles from './navbar.module.scss';

const Navbar = () => {
    return ( 
        <>
            <div className = {styles.div}>
                <p className={styles.title}>Where in the world</p>
                <p className={styles.themeButton}>Dark mode</p>
            </div>
            <Outlet />
        </>
    );
}
 
export default Navbar;