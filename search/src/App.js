import React, { Component } from 'react'
import CountryList from './Components/CountryList/CountryList'
import './App.css'
import { Button, Modal } from 'react-bootstrap';
import SearchBar from './Components/SearchBar/SearchBar';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      stats: [],
      searchField: ''
    }
  }



  async componentDidMount() {
    const resp = await fetch('https://restcountries.eu/rest/v2/all')
    const countries = await resp.json()
    this.setState({ countries })
    // this.state.countries.forEach(async country => {
    //   const resp = await fetch(`https://restcountries.eu/rest/v2/${country.name}`)
    //   const data = await resp.json()

    //   this.setState(prevState => (
    //     { stats: prevState.stats.concat(data[data.length - 1]) }
    //   ))
    // }
    // )
  }
  render() {
    const { countries, searchField } = this.state
    const filteredCountries = countries.filter(countries => (
      countries.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return (
      <React.Fragment>
        <React.Fragment>
          <SearchBar placeholder="search country" handleChange={(e) => this.setState({ searchField: e.target.value })} />
          <CountryList key={this.state.countries.capital} countries={filteredCountries} />
        </React.Fragment>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
        </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
        </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.state.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}
