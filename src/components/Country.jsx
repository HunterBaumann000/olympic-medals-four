import React, { Component } from 'react';
import Medal from './Medal';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@material-ui/core/IconButton';

class Country extends Component {

  getMedalsTotal(country, medals) {
    let totalMedals = 0;

    medals.forEach(medal =>
         { totalMedals += country[medal.name];
    });

    return totalMedals;
  }
  
  render() { 
    const { country, medals, addMedalCount, decreaseMedalCount, onDelete} = this.props;

    return (
    <Card style={{paddingTop: '50px', paddingBottom: '80px', paddingRight: '80px', paddingLeft: '80px'}}>
      <div className="country">
        <div className="name">
          <div class="titleFont">
          { country.name }
          </div>
          
          <hr/>
          <span>
            Total Medals Won:  { this.getMedalsTotal(country, medals) }
          </span>
          <hr/>
        </div> 
        { medals.map(medal =>
          <Medal 
            key={ medal.id } 
            country={ country } 
            medal={ medal } 
            addMedalCount={ addMedalCount } 
            decreaseMedalCount={ decreaseMedalCount } />
        ) }
        </div>
        <span> 
          <IconButton aria-label="delete" onClick={() => onDelete(country.id)}>
            <DeleteIcon ></DeleteIcon>
          </IconButton> 
        </span>
    </Card>
      
    );
  }
}

export default Country;