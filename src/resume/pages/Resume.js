import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import ComputerProg from '../components/ComputerProg';
import Teaching from '../components/Teaching';
import Education from '../components/Education';

function Resume() {
  const [resumeContent, setResumeContent] = useState('');

  function handleClick(event) {
    event.stopPropagation();
    if (event.currentTarget.id === 'comp') {
      setResumeContent('comp');
    } else if (event.currentTarget.id === 'teach') {
      setResumeContent('teach');
    } else if (event.currentTarget.id === 'edu') {
      setResumeContent('edu');
    } else if (event.currentTarget.id === 'exit') {
      setResumeContent('');
    }
  }

  return (
    <React.Fragment>
      <div id="resume" className={'scrollEffect resume__outlineBlueprint'}>
        <div className="sectionTitle">
          <h2 className="subTitle">Qualifications</h2>
        </div>
        <div className="resume__contentBlueprint">
          <ScrollAnimation
            animateIn="bounceIn"
            animateOut="fadeOut"
            className="resume__animate"
          >
            <div id="comp" className="resume__bio" onClick={handleClick}>
              <div>
                <h3 className="subTitle">Computer Programming</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceIn"
            delay={250}
            animateOut="fadeOut"
            className="resume__animate"
          >
            <div id="teach" className="resume__bio" onClick={handleClick}>
              <div>
                <h3 className="subTitle">Teaching</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceIn"
            delay={500}
            animateOut="fadeOut"
            className="resume__animate"
          >
            <div id="edu" className="resume__bio" onClick={handleClick}>
              <div>
                <h3 className="subTitle">Education</h3>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {resumeContent === 'comp' ? (
        <ComputerProg setResumeContent={setResumeContent} />
      ) : resumeContent === 'teach' ? (
        <Teaching setResumeContent={setResumeContent} />
      ) : resumeContent === 'edu' ? (
        <Education setResumeContent={setResumeContent} />
      ) : null}
    </React.Fragment>
  );
}

export default Resume;
