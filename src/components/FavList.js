const FavList = ({favouriteCountries, setCountryAgain}) => {

    if(!favouriteCountries){
        return null;
    }

    const handleSelectFavCountry = (name) => {
        setCountryAgain(name);
    }

    return (
        <>
        <div>
            <h4>Favourite Countries</h4>
            <ul>
            {favouriteCountries.map((country)=>{
            return (
                <li key={country.alpha3code}>
                    <button onClick={() => handleSelectFavCountry(country.name)}>
                        {country.name} </button>
                </li>
            )})}
            </ul>
        </div>
        </>
        )
   

}
export default FavList;