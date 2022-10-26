import { useEffect, useState } from "react";
import CountryTab from "../../components/country-tab/country-tab.component";
import SearchField from "../../components/search-field/search-field.component";
import SelectField from "../../components/selectField/select-field.component";
import { getCountries } from "../../utils/getAllCountries.js";

import styles from './main-page.module.scss'

const MainPage = (props) => {
    const { theme } = props;
    const [list, setList] = useState();
    const [region, setRegion] = useState('');
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
            if(country.region.includes(region)){
                return country.name.common.toLowerCase().includes(search);
            }
        });

        setFilteredList(newFilteredList);
    }, [list, search, region])

    return (  
        <div className = {styles.div}>
            <div className = {styles.filter}>
                <SearchField placeholder = {'Search for a country...'} setSearch = {setSearch} theme = {theme}/>
                <SelectField setRegion = {setRegion} theme = {theme}/>
            </div>
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