export const getCountryDetail = async (country) => {
    let data = [];
    try{
        await fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => response.json())
            .then((json) => {data = json});

        return data[0];
    } catch (error) {
        console.log('Error in fetching data', error)
    }   
}