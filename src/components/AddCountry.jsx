import React, { Component } from 'react';
import Button from '@mui/material/Button';

class AddCountry extends Component {
  state = {  }
  handleClick = () => {
    const name = prompt('Enter a New Country Name');
    if (name && name.trim().length > 0) {
      this.props.onAdd(name);
    } else {
      alert('Invalid Country Name Length')
    }
  }
  render() { 
    return (
      <div className='newCountryButton'>
        <Button variant="contained" onClick={ this.handleClick }
        style={{padding: '1em', backgroundColor: 'white'}}>
          <b>Add Country</b>
        </Button>
      </div>
    );
  }
}

export default AddCountry;
