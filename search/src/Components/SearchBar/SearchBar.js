import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <React.Fragment>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <div className='search-container'>
                    <div className='logo-div'>
                        <img src='https://www.brandverity.com/hubfs/Images/logos/Search%20Engine%20Logos/searchengine-bing.png' alt='logo' className='logo' />
                    </div>
                    <div className='search-div'>
                        <input type="serach" placeholder={props.placeholder} onChange={props.handleChange} className='search' />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default SearchBar;