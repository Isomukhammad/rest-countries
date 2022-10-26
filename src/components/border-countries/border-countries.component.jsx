import { useNavigate } from 'react-router-dom';
import styles from './border-countries.module.scss';

const BorderCountries = (props) => {
    const {countries, theme} = props;
    const navigate = useNavigate();
    const onNavigateHandler = (country) => navigate(`/${country}`)
    return(
        <div className={styles.div}>
        {countries.map(country => (
            <div 
                className = {styles.button} 
                onClick = {() => onNavigateHandler(country)}
                key = {country}
                style = { theme === 'dark' ? 
                {boxShadow: '0 5px 5px rgb(35, 35, 35)'}
                : null   
                } 
            >{country}</div>
        ))}
        </div>
    )
}

export default BorderCountries;