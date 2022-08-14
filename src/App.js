import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Scountry from './components/Country/Scountry/Scountry';
import Header from './components/Header/Header';

function App() {
  const [countries, setCountries] = useState([]);
  const [scountry, setCountry] = useState([]);
  const handleAddCountry = (country) => {
    const newCountry = [...scountry, country];
    setCountry(newCountry);
  }
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <div>
      <Header></Header>
      </div>
      <h1>Total Country: {countries.length}</h1>
      <Scountry scountry={scountry}></Scountry>
    <ul>
      {countries.map((country) => <Country country={country} handleAdCountry={handleAddCountry} key={country.tld}></Country>)}
    </ul>  
    </div>
  );
}

export default App;
