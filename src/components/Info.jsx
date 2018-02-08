import React from 'react';
import Stat from './Stat';

const masterStatList = [
  {
    quantity: '1884',
    description: 'Pickles, Whiskers, and Butterscotch FLLC, founded in 1884, has been serving cats for over a hundred years.'
  },
  {
    quantity: '2002',
    description: 'Cats in suits!'
  },
  {
    quantity: 'Millions',
    description: 'Of dog-llars billed to your account.'
  }
];

function Info(){
  return(
    <div>
      <h2>Catspace makes beautiful products to help cats create creative ideas succeed.</h2>
      {masterStatList.map((stat, index) =>
        <Stat
          quantity={stat.quantity}
          description={stat.description}
          key={index}/>
      )}
    </div>
  );
}



export default Info;
