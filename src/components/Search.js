import React from 'react';

export default function Search() {
  return (
    <div className="container">
      <form>
        <input  type="search" placeholder="Search country: " />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
