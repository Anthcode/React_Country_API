import React from 'react';

export default function Header({ filter,setCountries }) {
 

  const handleInput = (e) => {
    e.preventDefault();
    setCountries(filter.filter((country) =>{
    if (e.target.value==="") return country
    else if ( country.name.common.toLowerCase().includes(e.target.value.toLowerCase())) 
      return country;
    }))
  
  };

  return (
    <div className="Header">
      <div className="container">
        <form>
          <input
            type="search"
            placeholder="Search country: "
            autoFocus
            onFocus={(e)=>e.target.select()}
            onChange={handleInput}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
