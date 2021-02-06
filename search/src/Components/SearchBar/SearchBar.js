import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <div className='search-container'>
                <div className='logo-div'>
                    <img src='./ZDF_logo.png' alt='logo' className='logo' />
                </div>
                <div className='search-div'>
                    <input type="serach" placeholder={props.placeholder} onChange={props.handleChange} className='search' />
                </div>
            </div>
        </div>

    )
}
export default SearchBar;