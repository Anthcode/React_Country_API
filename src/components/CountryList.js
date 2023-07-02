import React, {useState} from 'react';

export default function CountryList({countries,filter}) {
  const [addData,setAddData] = useState(15)
  console.log(filter)
  return (
    <div className="CountryList">
    {filter.length>0 ? 
    (
     <ul>
     {filter.map((country)=>(
      <li key={country.name.common}>{country.flag} {country.name.common}</li>
     ))}
     </ul>
    ):(
    <ul>
    {countries.map((country)=>(
     <li key={country.name.common}>{country.flag} {country.name.common}</li>
    ))}
    </ul>
    )} 

    <button className="btn-next" onClick={() => setAddData(addData + 5)}>
        Add Next
      </button>
    </div>

  );
}