import React from 'react';
import './style.css';
import Header from './components/Header';
import {getApi} from './API_data/getApi'

export default function App() {
  return (
    <div className="App">
      <h1>Counrty API</h1>
      <Header />
      {getApi()}
    </div>
  );
}
