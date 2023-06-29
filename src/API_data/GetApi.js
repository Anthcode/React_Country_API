import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const GetApi = () => {
  const [addData, setAddData] = useState(5);
  // Fetcher function
  const getCountriesData = async () => {
    const req = await fetch('https://restcountries.com/v3.1/all');
    const data = await req.json();
    return data.map((country) => country.name.common);
  };
  // Using the hook
  const { data, error, isLoading } = useQuery(['name'], getCountriesData);
  // Error and Loading states
  if (error) return <div>Request Failed {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  // Show the response if everything is fine

  return (
    <>
      <ul>
        {data.slice(0, addData).map((el) => (
          <div key={data.queryKey}>
            <li> {el}</li>
          </div>
        ))}
      </ul>
      <button onClick={() => setAddData(addData + 5)}>Add Next</button>
    </>
  );
};
export default GetApi;
