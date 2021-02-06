import React, { Component } from 'react'
import CountryList from './Components/CountryList/CountryList'
import './App.css'
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
      <>
        <>
          <SearchBar placeholder="search country" handleChange={(e) => this.setState({ searchField: e.target.value })} />
          <CountryList key={this.state.countries.capital} countries={filteredCountries} />
        </>
      </>
    )
  }
}
