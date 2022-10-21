import styles from './country-tab.module.scss';

const CountryTab = (props) => {
    const { theme } = props;
    const {name, flags, population, region, capital} = props.list;

    return(
        <div 
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
                <h1>{name?.official}</h1>
                <p><span>Population</span>: {population}</p>
                <p><span>Region</span>: {region}</p>
                <p><span>Capital</span>: {capital}</p>
            </div>
        </div>
    )
}

export default CountryTab;