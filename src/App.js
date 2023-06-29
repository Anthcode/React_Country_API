import React from 'react';
import './style.css';
import Header from './components/Header';
import GetApi from './API_data/GetApi';


export default function App() {
  return (
    <div className="App">
      <h1>Counrty API</h1>
      <Header />
      <GetApi />
    </div>
  );
}
