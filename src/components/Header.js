import React, {useState} from 'react';

export default function Header({countries, setCountries}) {
  const [query, setQuery] = useState("");
  return (
    <div className="Header">
      <div className="container">
      <form>
        <input  type="search" placeholder="Search country: "
         onChange={e=>setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
    </div>
  );
}