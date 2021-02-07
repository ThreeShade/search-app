import React from 'react';
import './CountryCard.css';

const CountryCard = (props) => {



    return (
        <>
            <div className='country-card blurred-box' onClick={() => { props.onClick(props.countries) }}>
                <div className='card-row-one'>
                    <div className='flag'>
                        <img src={props.countries.flag} alt={props.countries.name} className='flag-img' />
                    </div >
                    <div className='title'>
                        <span className="name">{props.countries.name}</span>
                        <span className="capital">{props.countries.capital}</span>
                    </div>
                </div>
                <div className="card-row-two">
                    <span className="population">Population</span>
                    <span className="number">{props.countries.population}</span>
                </div>
            </div>
        </>
    )
}
export default CountryCard;