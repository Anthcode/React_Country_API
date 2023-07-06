import React, {useState} from 'react';

export default function CountryList({countries}) {
  const [addData, setAddData] =useState(15)
  const [countrySelect, setCountrySelect] = useState('')





  return (
    <div className="CountryList">
      {  console.log(countrySelect)}
<ul>
    {countries.slice(0, addData).map((country)=>(
     <li key={country.name.common} onClick={(e)=>setCountrySelect(e.target.innerHTML)}>{country.flag} {country.name.common}</li>
    ))}
    </ul>
    <button className="btn-next" onClick={() => setAddData(addData + 5)}>
        Add Next
      </button> 
    </div>

  );
}