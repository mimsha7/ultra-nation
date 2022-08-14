import React from 'react';
import './Country.css'

const Country = (props) => {
    
    const {name, capital, flags, population, region} = props.country;
    const handleAddCountry = props.handleAdCountry;
    return (
        <div className="country-info">
            <img src={flags.png} alt="" />
            <h3>Country name: {name.common}</h3>
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;