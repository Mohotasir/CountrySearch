import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const handleVisitedCountry = country =>{
        const newVisitedCountries = [...visitedCountries , country];
        setVisitedCountries(newVisitedCountries);
      
        console.log(country);
    }
    useEffect(
        ()=>{
            fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
        }
        ,[])
    return (
        <div>
            <h1 >Country: {countries.length}</h1>
            <div>
                <h2>Visited Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country=>
                            <li key={country.cca3}>{country.name.common}</li>
                        )
                    }
                </ul>
            </div>
            <div className="countries-container">
            {
                countries.map(country=> <Country
                    key={country.common} 
                    countrys={country}
                    handleVisitedCountry={handleVisitedCountry}
                    ></Country> )
            }
        </div>

        </div>
        
    );
};

export default Countries;