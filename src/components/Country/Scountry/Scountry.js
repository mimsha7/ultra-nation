import React from 'react';

const Scountry = (props) => {
    const scountry = props.scountry;
    let totalPopulation = scountry.reduce((total, country) => total+country.population,0)
    return (
        <div>
            <h4>Country Selected: {scountry.length}</h4>
            <h4>Total Population: {totalPopulation}</h4>
        </div>
    );
};

export default Scountry;