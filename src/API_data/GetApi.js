import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetch from './fetch';

const GetApi = () => {
  const [addData, setAddData] = useState(10);

  const { status, data } = useQuery(['country'], () =>
    fetch('https://restcountries.com/v3.1/all/?fields=name,tld,flag')
  );
  if (status === 'loading') return <h2>Loading...</h2>;
  if (status === 'error') return <h2>Error :(</h2>;

  return (
    <>
      <ul>
        {data.slice(0, addData).map((el) => (
          <li key={el.tld[0]}>
            <div className="flag">{el.flag}</div>
            {el.name.common}
          </li>
        ))}
      </ul>
      <button className="btn-next" onClick={() => setAddData(addData + 5)}>
        Add Next
      </button>
    </>
  );
};
export default GetApi;
