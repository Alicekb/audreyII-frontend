import React from 'react';
import Recipe from './Info_card/Recipe';

const infoStyle = {
  backgroundColor: '#fff',
  padding: '.7em'
}

const InfoCard = () => (
  <div className='row' style={infoStyle}>
    <Recipe />
  </div>
)

export default InfoCard;