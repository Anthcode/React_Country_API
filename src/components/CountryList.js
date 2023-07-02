import React from 'react';

export default function CountryList({countries,filter}) {

  return (
    <div className="CountryList">
<ul>
    {countries.map((country)=>(
     <li key={country.name.common}>{country.flag} {country.name.common}</li>
    ))}
    </ul>
  {/*   <button className="btn-next" onClick={() => setAddData(addData + 5)}>
        Add Next
      </button> */}
    </div>

  );
}