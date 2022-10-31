import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BorderCountries from '../../components/border-countries/border-countries.component';
import { getCountryDetail } from '../../utils/getCountryDetail';
import styles from './country.module.scss';

const Country = (props) => {
    const {theme} = props;
    const { country } = useParams();
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate('/');

    const [details, setDetails] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await getCountryDetail(country).then((data) => setDetails(data));
            setIsLoading(false);
        }
        fetchData();
    }, [country])

    return(
        <>
        {isLoading ? (null) :  (
        <div className= {styles.div}>
            <div 
                className= {styles.button}
                onClick = {onNavigateHandler}
                style = { theme === 'dark' ? 
                {boxShadow: '0 5px 5px rgb(35, 35, 35)'}
                : null   
            } 
            ><span>←</span> Back</div>
            <div className= {styles.info}>
                <img src={details?.flags.png} alt={`${details.name.official}'s flag`} />
                <div className={styles.details}>
                    <h3 className= {styles.title}>{details.name.common}</h3>

                    <div>
                        <p><span>Native Name:</span> {details.altSpellings[2]}</p>
                        <p><span>Population:</span> {details.population}</p>
                        <p><span>Region:</span> {details.subregion}</p>
                        <p><span>Capital:</span> {details.capital}</p>
                    </div>
                    
                    <div>
                        <p><span>Top Level Domain:</span> {details.tld}</p>
                        <p><span>Languages:</span></p>
                    </div>

                    <div className={styles.borders}>
                        <span>Border Countries:</span>
                        <div>
                            <BorderCountries countries = {details.borders} theme = {theme}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Country;