import React from 'react';

export default function CountryList({countries}) {
  return (
    <div className="CountryList">
    <ul>
    {countries.map((country)=>(
     <li key={country.name.common}>{country.flag} {country.name.common}</li> 


    ))}
    </ul>
    </div>
  );
}