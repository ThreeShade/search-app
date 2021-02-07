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
            <Modal style={{ position: "fixed", top: "20px", bottom: "20px", left: "20px", right: "20px", backgroundColor: "white", color: "black" }}
                {...props}
                size="lg"
            >
                <Modal.Body>
                    <h4>{country.name}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        < >
            <div className='showing-count'> &#8987; Showing  {props.countries.length} Countries</div>
            <div className='country-list'>
                {
                    props.countries.map((countries, index) => <CountryCard key={index} countries={countries} onClick={(country) => { setCountry(country); setShow(true) }} />)
                }
                {/* {country.name ? */}

                <CountryModal
                    show={show}
                    onHide={() => setShow(false)}

                />
                {/* : null
                    } */}
            </div>
        </>
    )
}
export default CountryList;