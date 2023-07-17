import React, {useState} from 'react';
import Country from './Country'

export default function CountryList({countries}) {
  const [addData, setAddData] =useState(20)
  const [countrySelect, setCountrySelect] = useState()
  const handleCountry =(name) =>{
    setCountrySelect(name)
  }
  return (
  <>
    {countrySelect && <Country countrySelect={countrySelect} setCountrySelect={setCountrySelect}/>} 
      <div className="CountryList">
        <ul className="NameList">
          {countries.slice(0, addData).map((country) => (
            <li key={country.name.common} onClick={() => handleCountry(country)}>
              {country.flag} {country.name.common}
            </li>
          ))}
        </ul>
        <button className="btn-next" onClick={() => setAddData(addData + 5)}>
          Add Next
        </button>
      </div>
</>
  );
}