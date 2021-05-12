import { useDebugValue, useEffect, useState } from 'react';
import Country from '../components/Country';
import CountryPicker from '../components/CountryPicker';
const CountriesBox = () => {

    const [countryList, setCountryList] = useState([]);
    const [countryChosen, setCountryChosen] = useState('');  // we have the individual county name value just sitting here now... what can we do with it? 


    useEffect(()=>{
        getCountryData();
    }, [])

    const getCountryData = () => {
        console.log('getting country data');
        const url = (`https://restcountries.eu/rest/v2/all`)
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            setCountryList(data);
        })
    };

    const globalPop = countryList.reduce((countryPop, value)=>{
        return countryPop + value.population;
    }, 0)

    const handleChangeCountry = country => {
        setCountryChosen(country);
    }

    const selectedCountry = countryList.find(country => {
        return countryChosen === country.name;
    })

    return (
        <>
            <h1>Countries Container</h1> 
            <CountryPicker 
            changeCountry={handleChangeCountry}
            countryList={countryList}/>
            <br></br>
            <h4>Global Population: {globalPop}</h4>
            <Country selectedCountry={selectedCountry}/>
        </>
    )
}
export default CountriesBox;