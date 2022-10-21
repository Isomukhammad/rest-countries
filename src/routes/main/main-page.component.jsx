import { useEffect, useState } from "react";
import CountryTab from "../../components/country-tab/country-tab.component";
import { getCountries } from "../../utils/getAllCountries.js";

import styles from './main-page.module.scss'

const MainPage = () => {
    const [list, setList] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            await getCountries().then((data) => setList(data));
            setIsLoading(false);
        }
        
        fetchData();
    }, [])

    return (  
        <div className = {styles.div}>
            { isLoading ? (null) : (
                <>
                {
                    list.map((country) => (
                        <CountryTab key = {country.name.official} list = {country}/>
                    ))
                }
                </>
            )}
        </div>
    );
}
 
export default MainPage;