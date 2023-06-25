import React from 'react';
import { useQuery } from '@tanstack/react-query';

const GetApi = () => {
  // Fetcher function
  const getFacts = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const res = await req.json();
   return res.title
  };
  // Using the hook
  const { data, error, isLoading } = useQuery(['title'], getFacts);
  // Error and Loading states
  if (error) return <div>Request Failed {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  // Show the response if everything is fine
  return data
};
export default GetApi;
