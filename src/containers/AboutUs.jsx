import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import catJail from '../assets/images/cat-jail.jpg';

function AboutUs(){
  return(
    <div>
      <Hero
        heroImage={catJail}/>
      <Nav/>

    </div>
  );
}

export default AboutUs;
