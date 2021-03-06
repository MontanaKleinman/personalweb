import React from 'react';
import { compInfo } from '../data/resumeInfo';

function ComputerProg(props) {
  return (
    <div
      className="resume__modal__outlineBlueprint"
      onClick={e =>
        e.target.className === 'resume__modal__outlineBlueprint'
          ? props.setResumeContent('')
          : null
      }
    >
      <div className="resume__modal__contentBlueprint">
        <div className="resume__modal__title">
          <p>QUALIFICATION</p>
          <p>INSTITUTION</p>
          <p>DATE</p>
        </div>
        <div className="resume__modal__scroll">
          {compInfo.map(item => {
            return (
              <div className="resume__modal__content">
                <p>{item.qualification}</p>
                <p>{item.institution}</p>
                <p>{item.date}</p>
              </div>
            );
          })}
        </div>
        <div className="exitButton" onClick={e => props.setResumeContent('')}>
          x
        </div>
      </div>
    </div>
  );
}

export default ComputerProg;
