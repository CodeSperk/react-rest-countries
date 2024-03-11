import { useState, useEffect } from "react";
import "./countries.css"
import Country from "../country/Country";


const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);


  useEffect(()=> {
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])

  const handleVisitedCountries = country => {
    const allVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(allVisitedCountries);
  }



  return (
    <div>
      <h3 className="text-2xl my-6">Total countries: {countries.length}</h3>

    <div>
      <h3>number of visitedCountries : {visitedCountries.length}</h3>
      <ul>
        {
          visitedCountries.map(visitedCountry => <li>{visitedCountry.name.common}</li>)
        }
      </ul>
    </div>
     


      <div className="country-container">
      {
        countries.map(country => <Country key={country.cca3}  country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
      }
      </div>
      
    </div>
  );
};

export default Countries;