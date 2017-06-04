import React from 'react';

const infoStyle = {
  backgroundColor: '#fff',
  padding: '.7em'
}

const InfoCard = ({ingredients, calories, recipe}) => (
  <div className='row' style={infoStyle}>
    <div className='container' style={{paddingLeft: '.5em'}}>
      <h3>Ingredients List:</h3>
        <ul className='ui list'>
          {ingredients}
        </ul>
      <h3>Calories:</h3>
        <ul className='ui list'>
          <li>{calories}</li>
        </ul>
      <h3>Recipe URL:</h3>
        <a href={recipe} target='_blank' rel="noopener noreferrer">
          {recipe}
        </a>
    </div>
  </div>
)

export default InfoCard;