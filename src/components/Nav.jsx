import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
  const linkDecoration = {
    textDecoration: 'none'
  };
  return(
    <div>
      <style jsx>{`
        a:hover{
          color: red;
        }
      `}</style>
      <h1 className="whatever">Nav Works</h1>
      <Link className="linkClass" style={linkDecoration} to='/'><a>Home</a></Link> | <Link style={linkDecoration} to='/about'><a>About Us</a></Link> | <Link style={linkDecoration} to='/team'><a>Our Team</a></Link>

    </div>
  );
}

export default Nav;
