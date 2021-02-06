import React from 'react'
import CountryCard from '../CountryCard/CountryCard';
import './CountryList.css'
// import Country from '../Country/Country';

const CountryList = (props) => {
    return (
        <div className='country-list col-sm-12'>
            {
                // props.countries.map(countries => <Country countries={props.countries} />)
                props.countries.map(countries => <CountryCard countries={props.countries} />)
            }
        </div>
    )
}
export default CountryList;