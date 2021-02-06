import { React } from 'react'
import CountryCard from '../CountryCard/CountryCard';
import './CountryList.css'
// import Country from '../Country/Country';

const CountryList = (props) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true); onClick={handleShow}
    return (
        <div className='country-list' smooth={true}>
            {
                // props.countries.map(countries => <Country countries={props.countries} />)
                props.countries.map((countries, index) => <CountryCard key={index} countries={countries} />)
            }
            {/* <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                </Modal>
            </div> */}
        </div>
    )
}
export default CountryList;