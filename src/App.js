import React, { useState, useEffect } from 'react';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CountryList from './components/CountryList'


export default function App() {

  const URL = "https://restcountries.com/v3.1/all?fields=name,flag,tld";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(URL);
        const resp = await res.json();
        resp.sort((a,b)=> a.name.common>b.name.common?1:-1)
        setCountries(resp);
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
        <Header  countries={countries} setCountries={setCountries} />
        <CountryList countries={countries}/>
      </div>
      <Footer />
    </>
  );
}
