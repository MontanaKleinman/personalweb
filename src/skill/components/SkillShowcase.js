import React from 'react';

function SkillScreen(props) {
  return (
    <div className="skill__visible">
      <img src={props.attribute} alt={props.description} />
      <p>{props.description}</p>
    </div>
  );
}

export default SkillScreen;
