import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import TeamGallery from '../components/TeamGallery';
import catJail from '../assets/images/cat-jail.jpg';

function OurTeam(){
  return(
    <div>
      <Hero
        heroImage={catJail}/>
      <Nav/>
      <TeamGallery/>


    </div>
  );
}

export default OurTeam;
