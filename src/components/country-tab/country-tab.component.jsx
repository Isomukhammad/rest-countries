import { Link, useNavigate } from 'react-router-dom';
import styles from './country-tab.module.scss';

const CountryTab = (props) => {
    const { theme } = props;
    const { cca3, name, flags, population, region, capital} = props.list;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(`${cca3}`);

    return(
        <div 
            onClick={onNavigateHandler}
            className= {styles.div}
            style = { theme === 'dark' ? 
                {boxShadow: '0 5px 5px rgb(35, 35, 35)'}
                : null   
            } 
        >
            <div className = {styles.flag}>
                <img src={flags?.png} alt="Country flag" />
            </div>
            <div className = {styles.details}>
                <h1>{name?.common}</h1>
                <p><span>Population</span>: {population}</p>
                <p><span>Region</span>: {region}</p>
                <p><span>Capital</span>: {capital}</p>
            </div>
        </div>
    )
}

export default CountryTab;