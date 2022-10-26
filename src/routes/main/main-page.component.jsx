import { useEffect, useState } from "react";
import CountryTab from "../../components/country-tab/country-tab.component";
import SearchField from "../../components/search-field/search-field.component";
import { getCountries } from "../../utils/getAllCountries.js";

import styles from './main-page.module.scss'

const MainPage = (props) => {
    const { theme } = props;
    const [list, setList] = useState();
    const [filteredList, setFilteredList] = useState();
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            await getCountries().then((data) => setList(data));
            setIsLoading(false);
        }
        
        fetchData();
    }, [])

    useEffect(() => {
        const newFilteredList = list?.filter((country) => {
            return country.name.common.toLowerCase().includes(search);
        });

        setFilteredList(newFilteredList);
    }, [list, search])

    return (  
        <div className = {styles.div}>
            <SearchField placeholder = {'Search for a country...'} setSearch = {setSearch} theme = {theme}/>
            <div className = {styles.countries}>
                { isLoading ? (null) : (
                <>
                {
                    filteredList?.map((country) => (
                        <CountryTab key = {country.name.common} list = {country} theme = {theme}/>
                    ))
                }
                </>
            )}
            </div>
        </div>
    );
}
 
export default MainPage;