export const getCountries = async () => {
    let data = [];
    try{
        await fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then((json) => {data = json});

        return data;
    } catch (error) {
        console.log('Error in fetching data', error)
    }   
}