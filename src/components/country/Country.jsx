import { useState } from "react";
import "./country.css"
const Country = ({country, handleVisitedCountries}) => {
  const {name, flags, area, population} = country;
  // console.log(country);
  const [visited, setVisited] = useState(false);


  const handleVisit = () => {
    setVisited(!visited);
  }

  return (
    <div className={`country-card ${visited && 'visited-country'}`}>
      <h3 className="text-xl font-semibold mb-4">Name: {name?.common}</h3>      
      <img className="country-flag" src={flags?.png} alt={flags?.alt} />
      <p>Area: {area} square KM</p>
      <p style={{background:visited?"blue":"lightBlue"}}>Total Population: {population}</p>

      <button className="btn" onClick={handleVisit}>{visited? "Visited" : "Going"}</button>
      <small className="ml-2">{visited? "I have visited" : "Yet Not"}</small>

      <button onClick={() => handleVisitedCountries(country)} className="btn block">Mark Visited</button>
    </div>
  );
};

export default Country;