import React from 'react';

const CountryCard = (props) => {
    return (
        <div>
            <p>{props.countries.name}</p>
        </div>
    )
}

export default CountryCard;