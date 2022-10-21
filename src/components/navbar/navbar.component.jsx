import { Outlet } from "react-router-dom";

import styles from './navbar.module.scss';

const Navbar = (props) => {
    const { theme, handleThemeChange } = props;
    return ( 
        <>
            <div 
                className = {styles.div}
                style = { theme === 'dark' ? 
                    {boxShadow: '0 5px 5px rgb(35, 35, 35)'}
                    : null   
                }    
            >
                <p className={styles.title}>Where in the world</p>
                <p 
                    className={styles.themeButton}
                    onClick = {handleThemeChange}
                >Dark mode</p>
            </div>
            <Outlet />
        </>
    );
}
 
export default Navbar;