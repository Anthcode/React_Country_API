import React from 'react';
import { useQuery } from '@tanstack/react-query';

const GetApi = () => {
  // Fetcher function
  const getFacts = async () => {
    const req = await fetch('https://restcountries.com/v3.1/all');
    const res = await req.json();
    return res;
  };
  // Using the hook
  const { data, error, isLoading } = useQuery(['title'], getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  // Show the response if everything is fine
  
  return (
    <>
      <ul>
        {data.map((el) => (
          <div key={el.cca2}>
          <li > {el.name.common}</li> <img src={el.flags.png} alt={el.name.common}/>
          </div>
        ))}
      </ul>
    </>
  );
};
export default GetApi;
