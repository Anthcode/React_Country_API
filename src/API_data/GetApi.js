import React from 'react';
import { useQuery } from '@tanstack/react-query';

const GetApi = () => {
  // Fetcher function
  const getFacts = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await req.json();
    return res;
  };
  // Using the hook
  const { data, error, isLoading } = useQuery(['title'], getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  // Show the response if everything is fine
  console.log(data);
  return (
    <>
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.id} {el.title}</li>
        ))}
      </ul>
    </>
  );
};
export default GetApi;
