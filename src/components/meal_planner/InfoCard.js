import React from 'react';

const infoStyle = {
  backgroundColor: '#fff',
  paddingLeft: '.7em'
}

const InfoCard = ({ name, ingredients, calories, recipe, removable, handleDelete }) => (
  <div className='row' style={infoStyle}>
    <div className='container'>
      { removable ? 
        <button 
          onClick={() => handleDelete(name)}
          style={{float: 'right', marginRight: '5px'}}>Delete
        </button> 
        : (null)
      }
      <h3>Ingredients List:</h3>
        <ul className='ui list three column grid'>
          {ingredients}
        </ul>
      <h3>Calories:</h3>
        <ul className='ui list'>
          <li>{calories}</li>
        </ul>
      <h3>Recipe URL:</h3>
        { recipe !== '' ?
          <a href={recipe} target='_blank' rel="noopener noreferrer">
            {recipe}
          </a> : (null)
        }
    </div>
  </div>
)

export default InfoCard;