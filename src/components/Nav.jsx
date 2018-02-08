import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  const linkDecoration = {
    textDecoration: 'none'
  };
  return(
    <div>
      <h1>Nav Works</h1>
      <Link style={linkDecoration} to='/'>Home</Link> | <Link style={linkDecoration} to='/about'>About Us</Link> | <Link style={linkDecoration} to='/team'>Our Team</Link>

    </div>
  );
}

export default Nav;
