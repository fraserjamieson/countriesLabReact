import FavList from '../components/FavList';

const Country = ({selectedCountry, countryList, onFavToggle, onCountrySelected}) => {   

    if (!selectedCountry){
        return <h2>The country details are not rendering properly</h2>
    }

    const handleClick = () => {
        onFavToggle(selectedCountry.name);
    }

    const handleCountrySelect = name => {
        onCountrySelected(name)
    }

    const favouriteCountries = countryList.filter((country) => { 
        return country.favourite}
    )

    const favButtonText = selectedCountry.favourite? 'remove from favs' : 'add to favs'


        return (
        <>
        <div className="countryWrapper" style={{listStyleType: "none", color: "blue"}}>
            <img src={selectedCountry.flag} width="400" height="450"></img>

            <button className="favButton" onClick={()=> handleClick()}> 
            {favButtonText}
            {/* {selectedCountry.favourite? 'remove from favs' : 'add to favs'} */}
            </button>
            <h3 style={{fontWeight: "bold", fontStyle: "oblique"}}>
                The country of {selectedCountry.name} has a population of {selectedCountry.population}, and is located within the continent of {selectedCountry.region}
            </h3>

            <FavList 
            favouriteCountries = {favouriteCountries}
            setCountryAgain={handleCountrySelect}/>

        </div>

        </>
        )
    }


export default Country;