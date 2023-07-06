import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CountryList from './components/CountryList';

export default function App() {
  const URL = 'https://restcountries.com/v3.1/all?fields=name,flag';
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const dataRan = useRef(false);

  useEffect(() => {
    if (dataRan.current === true) {
      const getData = async () => {
        try {
          const res = await fetch(URL);
          const resp = await res.json();
          resp.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
          setCountries(resp);
          setFilter(resp);
        } catch (err) {
          console.log(err);
        }
      };
      getData();
    }
    return () => (dataRan.current = true);
  }, []);

  return (
    <>
      <div className="App">
        <h1>Counrty API</h1>
        <Header setCountries={setCountries} filter={filter} />
        <CountryList countries={countries} filter={filter} />
      </div>
      <Footer />
    </>
  );
}
