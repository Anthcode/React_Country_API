import React from 'react';

export default function Country({setCountrySelect, countrySelect}) {
  return (
    <>
    <div className="CountryWrapp">
    <div className="CountryInfo">{countrySelect.flag} {countrySelect.name.common} </div>
    <button className="close" onClick={()=>setCountrySelect(null)}>x</button>
    </div>
</>
  );
}