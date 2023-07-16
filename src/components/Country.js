import React from 'react';

export default function Country({setCountrySelect, countrySelect}) {


  return (
    <>
    <div className="CountryWrapp">
    <button className="close" onClick={()=>setCountrySelect(null)}>x</button>
    <div className="CountryInfo">{countrySelect.flag} {countrySelect.name.common}
     
    <section className="region">
      <p><b>Region:</b> {countrySelect.region}</p>
      <p><b>Capital:</b> {countrySelect.capital}</p>
      <ul className="lang"><b>Languages:</b> {Object.values(countrySelect.languages).map((value,idx)=>(
    
          <li key={idx} className="lang-li">{value}</li>
        
      ))}
      </ul>
    </section>
    </div>


    </div>


</>
  );
}