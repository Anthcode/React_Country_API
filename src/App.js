import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CountryList from './components/CountryList';

export default function App() {
  const URL = 'https://restcountries.com/v3.1/all?fields=name,flag,languages,capital,region';
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => { 
      const getData = async () => {

        try {
          const res = await fetch(URL);
          const resp = await res.json();
          resp.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
          setCountries(resp);
          setFilter(resp);
          setLoading(false)
        } catch (err) {
          console.log(err);
        }
      };
      getData();
  }, []);

  return (
    <>
      <div className="App">
        <h1>Counrty API</h1>
        <Header setCountries={setCountries} filter={filter} />
        <CountryList countries={countries} loading={loading} />
      </div>
      <Footer />
    </>
  );
}
