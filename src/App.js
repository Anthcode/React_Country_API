import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import GetApi from './API_data/GetApi';


export default function App() {
  /*  const [data, setData] = useState(null);

  useEffect(() => {
    const getFacts = async () => {
      const req = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const res = await req.json();
      setData(res.title);
    };
    getFacts();
  }, []); */

  return (
    <div className="App">
      <h1>Counrty API</h1>
      <Header />
   <GetApi />
    </div>
  );
}
