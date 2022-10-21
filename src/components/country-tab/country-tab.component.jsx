import styles from './country-tab.module.scss';

const CountryTab = (props) => {
    const {name, flags, population, region, capital} = props.list;
    return(
        <div className= {styles.div}>
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