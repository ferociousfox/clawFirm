import React from 'react';
import PropTypes from 'prop-types';

function Stat(props){
  return(
    <div className='card'>
      <div className='title'>
        <h1>{props.quantity}</h1>
      </div>
      <div className='copy'>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

Stat.propTypes = {
  quantity: PropTypes.string,
  description: PropTypes.string
};

export default Stat;
