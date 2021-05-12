const Country = ({selectedCountry}) => {

    if (!selectedCountry){
        return <h2>The country details are not rendering properly</h2>
    } else {

        return (
        <>
        <div style={{listStyleType: "none", color: "blue"}}>
        <img src={selectedCountry.flag} width="400" height="450"></img>
            <h3 style={{fontWeight: "bold", fontStyle: "oblique"}}>
             The country of {selectedCountry.name} has a population of {selectedCountry.population}, and is located within the continent of {selectedCountry.region}
            </h3>
        </div>
        </>
        )
    }
}
export default Country;