import React, {useState} from 'react';

export default function CountryList({countries}) {
  const [addData, setAddData] =useState(10)
  const [countrySelect, setCountrySelect] = useState()

  const handleCountry =(name) =>{
    setCountrySelect(name)

  }

  return (
    <>
{countrySelect &&
    <div className="CountryWrapp">
    <div className="CountryInfo">{countrySelect.flag} {countrySelect.name.common} </div><button className="close" onClick={()=>setCountrySelect(null)}>x</button>
    </div>} 

    <div className="CountryList">
<ul>
    {countries.slice(0, addData).map((country)=>(
     <li key={country.name.common} onClick={()=>handleCountry(country)}>{country.flag} {country.name.common}</li>
    ))}
    </ul>
    <button className="btn-next" onClick={() => setAddData(addData + 5)}>
        Add Next
      </button> 
    </div>
</>
  );
}