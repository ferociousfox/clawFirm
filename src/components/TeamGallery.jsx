import React from 'react';
import TeamMember from './TeamMember';
import whiskers from '../assets/images/Whiskers-III.jpg';
import butterscotch from '../assets/images/Butterscotch.jpg';
import pickles from '../assets/images/mr-pickles.png';

const clawPartnerList = [
  {
    img: whiskers,
    name: 'Mr Reginald J Whiskers III',
    bio: 'I am a cat clawyer',
  },
  {
    img: butterscotch,
    name: 'Mr Beauregard Butterscotch IV',
    bio: 'I am a cat clawyer'
  },
  {
    img: pickles,
    name: 'Mr Patrick Q. Pickles III',
    bio: 'Clawyer extrodinaire.'
  }
];

function TeamGallery(){
  return(
    <div>
      <h1>TeamGallery works</h1>
      {clawPartnerList.map((partner, index) =>
        <TeamMember
          img={partner.img}
          name={partner.name}
          bio={partner.bio}
          key={index}/>
      )}
    </div>
  );
}

export default TeamGallery;
