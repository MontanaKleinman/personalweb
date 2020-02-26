import React, { useState, Suspense } from 'react';
import { compInfo, teachInfo, eduInfo } from '../resumeInfo';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
const CompScreen = React.lazy(() => import('./CompScreen'));
const TeachScreen = React.lazy(() => import('./TeachScreen'));
const EduScreen = React.lazy(() => import('./EduScreen'));

function Resume() {
  const [classId, setClassId] = useState({
    comp: 'bio',
    teach: 'bio',
    edu: 'bio'
  });

  const [resumeView, setResumeView] = useState({
    comp: 'resumeHidden',
    teach: 'resumeHidden',
    edu: 'resumeHidden'
  });

  const [compText, setCompText] = useState(
    compInfo[0].description.map((sentence, index) => (
      <li key={index}>{sentence}</li>
    ))
  );
  const [teachText, setTeachText] = useState(
    teachInfo[0].description.map((sentence, index) => (
      <li key={index}>{sentence}</li>
    ))
  );
  const [eduText, setEduText] = useState(
    eduInfo[0].description.map((sentence, index) => (
      <li key={index}>{sentence}</li>
    ))
  );

  function handleClick(event) {
    event.stopPropagation();
    if (event.currentTarget.id === 'comp') {
      setClassId({
        comp: 'bioComp',
        teach: 'bioHidden',
        edu: 'bioHidden'
      });
      setResumeView(prevResumeView => {
        return {
          ...prevResumeView,
          comp: 'resumeVisible'
        };
      });
    } else if (event.currentTarget.id === 'teach') {
      setClassId({
        comp: 'bioHidden',
        teach: 'bioTeach',
        edu: 'bioHidden'
      });
      setResumeView(prevResumeView => {
        return {
          ...prevResumeView,
          teach: 'resumeVisible'
        };
      });
    } else if (event.currentTarget.id === 'edu') {
      setClassId({
        comp: 'bioHidden',
        teach: 'bioHidden',
        edu: 'bioEdu'
      });
      setResumeView(prevResumeView => {
        return {
          ...prevResumeView,
          edu: 'resumeVisible'
        };
      });
    } else if (event.currentTarget.className === 'exitButton') {
      setClassId({
        comp: 'bio fadeIn',
        teach: 'bio fadeIn',
        edu: 'bio fadeIn'
      });
      setResumeView({
        comp: 'resumeHidden',
        teach: 'resumeHidden',
        edu: 'resumeHidden'
      });
    }
  }

  return (
    <div id="resume" className="scrollEffect contentBox resumeAdjustments">
      <div className="sectionTitle">
        <h2 className="subTitle">Qualifications</h2>
      </div>
      <div className="resumeScreen">
        <ScrollAnimation animateIn="bounceIn" animateOut="fadeOut">
          <div onClick={handleClick} id="comp" className={classId.comp}>
            <div>
              <h3 className="subTitle">Computer Programming</h3>
              <div className="exitButton" onClick={handleClick}>
                x
              </div>
            </div>
            <div className={resumeView.comp}>
              <Suspense fallback={<div>Loading...</div>}>
                <CompScreen setText={setCompText} />
              </Suspense>
              <ul className="resumeDesc">{compText}</ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceIn" delay={250} animateOut="fadeOut">
          <div onClick={handleClick} id="teach" className={classId.teach}>
            <h3 className="subTitle">Professional Teaching</h3>
            <div className="exitButton" onClick={handleClick}>
              x
            </div>
            <div className={resumeView.teach}>
              <Suspense fallback={<div>Loading...</div>}>
                <TeachScreen setText={setTeachText} />
              </Suspense>
              <ul className="resumeDesc">{teachText}</ul>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="bounceIn" delay={500} animateOut="fadeOut">
          <div onClick={handleClick} id="edu" className={classId.edu}>
            <h3 className="subTitle">Educational Record</h3>
            <div className="exitButton" onClick={handleClick}>
              x
            </div>
            <div className={resumeView.edu}>
              <Suspense fallback={<div>Loading...</div>}>
                <EduScreen setText={setEduText} />
              </Suspense>
              <ul className="resumeDesc">{eduText}</ul>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Resume;
