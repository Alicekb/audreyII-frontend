import React from 'react';

const infoStyle = {
  backgroundColor: '#fff',
  paddingLeft: '.7em'
}

const InfoCard = ({ingredients, calories, recipe}) => (
  <div className='row' style={infoStyle}>
    <div className='container'>
      <h3>Ingredients List:</h3>
        <ul className='ui list three column grid'>
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