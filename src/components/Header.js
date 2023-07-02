import React, {useState} from 'react';

export default function Header({countries, filter, setFilter}) {
  const [query, setQuery] = useState("");
  

  const handleInput = (e)=>{
    e.preventDefault();
  
    setQuery(e.target.value);
    if (query==="") setFilter(null)
    setFilter(
      countries.filter((x) =>
        x.name.common.toLowerCase().includes(query.toLowerCase())
      )
    );
  }

  return (
    <div className="Header">
      <div className="container">
      <form>
        <input  type="search" placeholder="Search country: "
         onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
    </div>
    </div>
  );
}