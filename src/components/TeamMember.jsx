import React from 'react';
import PropTypes from 'prop-types';

function TeamMember(props){
  return(
    <div>
      <img src={props.img}/>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

TeamMember.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
};

export default TeamMember;
