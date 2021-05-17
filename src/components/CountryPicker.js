import { useState, useEffect } from "react";

const CountryPicker = ({countryList, changeCountry}) => {

    const [countryChild, setCountryChild]= useState('')

    const handleCountryChange = (e) => {
        setCountryChild(e.target.value);
    }

    useEffect(()=>{
        changeCountry(countryChild)
    }, [countryChild]);

    return (
        <>
        <label className="country-Picker" for="countries">Choose a country:</label>
        <select id="countries" onChange={handleCountryChange}>

            <option value="">this will be the country picker</option>
            {countryList.map((country)=>{
                return (
                <option key={country.alpha3Code} value={country.name}>{country.name}</option>
                ) 
            })}
        </select>
        </>
    )
}
export default CountryPicker;