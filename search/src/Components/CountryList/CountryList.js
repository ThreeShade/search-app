import React, { useState } from 'react'
import CountryCard from '../CountryCard/CountryCard';
import './CountryList.css'
import { Modal } from 'react-bootstrap'
// import Country from '../Country/Country';

const CountryList = (props) => {
    const [country, setCountry] = useState({});
    const [show, setShow] = useState(false);
    // const [index, setIndex] = useState(-1);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    function CountryModal(props) {
        return (
            <Modal className="country-modal"
                {...props}
                size="lg"
            >
                <Modal.Body className="modal-body">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className='modal-flag'><img src={country.flag} alt={country.name} className="img-n" /><h1>{country.name}</h1></div>
                        <div className='content'><span className='text'>capital :</span><span className='desc'>{country.capital}</span></div>
                        <div className='content'><span className='text'>population :</span><span className='desc'>{country.population}</span></div>
                        <div className='content'><span className='text'>timezone :</span><span className='desc'>{country.timezones}&#9200;</span></div>
                        <div className='content'><span className='text'>area :</span><span className='desc'>{country.area}&#65039;</span></div>
                        <div className='content'><span className='text'>callingCodes :</span><span className='desc'>{country.callingCodes}&#x1f4f1;</span></div>
                        <div className='content'><span className='text'>latlng :</span><span className='desc'>{country.latlng}	</span></div>
                    </div>
                </Modal.Body>
                <Modal.Footer className="footer">
                    <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <React.Fragment>
            <div className='showing-count'> &#8987; Showing  {props.countries.length} Countries</div>
            <div className='country-list'>
                {
                    props.countries.map((countries, index) => <CountryCard key={index} countries={countries} onClick={(country) => { setCountry(country); setShow(true) }} />)
                }
            </div>
            <CountryModal
                show={show}
                onHide={() => setShow(false)}
            />
        </React.Fragment>
    )
}
export default CountryList;