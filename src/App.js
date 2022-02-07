import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AddCountry from './components/AddCountry';

class App extends Component {

  state = {
    countries: [
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 1 },
      { id: 1, name: 'United States', gold: 2, silver: 3, bronze: 5 },
      { id: 3, name: 'Germany', gold: 1, silver: 0, bronze: 2 },
    ],
    medals: [
      { id: 1, name: 'gold' },
      { id: 2, name: 'silver' },
      { id: 3, name: 'bronze' },
    ]
  }

  addToCountries = (name) => {
    const { countries } = this.state;

    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const currentCountries = [...countries].concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 });
    
    this.setState({ countries: currentCountries });
  }

  deleteCountry = (countryId) => {
    const { countries } = this.state;

    const currentCountries = [...countries].filter(c => c.id !== countryId);
    this.setState({ countries: currentCountries });
  }

  addMedalCount = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);

    countries[idx][medalName]++;
    this.setState({ countries: countries });
  }
  decreaseMedalCount = (countryId, medalName) => {
    const countries = [ ...this.state.countries ];
    const idx = countries.findIndex(c => c.id === countryId);

    if( countries[idx][medalName] > 0 ) {
      countries[idx][medalName]--;
      this.setState({ countries: countries });
    }

  }
  AllMedalsTotal() {
    let sum = 0;
    this.state.medals.forEach(medal => { 
      sum += this.state.countries.reduce((a, b) => a + b[medal.name], 0); 
    });
    return sum;
  }

  render() { 

    return ( 
      <div id="centerContent">
      <div className="App">
        <header className="App-header">
        </header> 

        <div id="addButton">
          <AddCountry onAdd={ this.addToCountries } />
        </div>

        <Container fixed={true} style={{paddingTop: '70px', paddingBottom: '20px', paddingRight: '80px', paddingLeft: '80px'}}>
          <Grid spacing={2} justifyContent='center' container>
          { this.state.countries.map(country => 
            <Grid item key={ country.id }>
            <Country 
              key={ country.id } 
              country={ country }
              medals={ this.state.medals }
              addMedalCount={ this.addMedalCount } 
              decreaseMedalCount={ this.decreaseMedalCount }
              onDelete={this.deleteCountry}
            />
            </Grid>
            )}
          </Grid>
        </Container>

        <div id="bottomBox"> 
        Total Cumulative Medals Won: <b> { this.AllMedalsTotal() } </b>
        </div>
        
      </div>
      </div>
     );
  }
}
 
export default App;