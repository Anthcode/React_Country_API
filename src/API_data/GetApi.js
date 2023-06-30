import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetch from './fetch'

const GetApi = () => {
  const [addData, setAddData] = useState(5);

  const { status, data } = useQuery(['name'], () =>
  fetch("https://restcountries.com/v3.1/all/?fields=name")
);
if (status === "loading") return <p>Loading...</p>;
if (status === "error") return <p>Error :(</p>;

console.log(data);
  return (
    <>
      <ul>
        {data.slice(0, addData).map((el,idx) => (
         
            <li key={idx} > {el.name.common}</li>
          
        ))}
      </ul>
      <button onClick={() => setAddData(addData + 5)}>Add Next</button>
    </>
  );
};
export default GetApi;
