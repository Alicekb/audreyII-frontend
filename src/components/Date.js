import React from 'react';

const Date = ({week, year}) => (
  <div className='column row' style={{padding: '0'}}>
    {!!week ? (
      <h1>Week {week} - {year}</h1>
    ) : (
      <h1>{year}</h1>
    )}
  </div>
);

export default Date;