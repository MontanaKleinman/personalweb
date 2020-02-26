import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function About() {
  return (
    <div id="about" className="scrollEffect contentBox aboutAdjustments">
      <div className="aboutScreen">
        <div className="sectionTitle">
          <h2 className="subTitle">About Me</h2>
        </div>
        <ScrollAnimation animateIn="slideInLeft" animateOut="fadeOut">
          <div className="aboutBoard">
            <div className="aboutContent">
              <p className="aboutIntro textTitle">
                <strong> Web Developer</strong> and
                <strong> Teacher</strong>.
              </p>
              <p className="aboutText">
                With experience as a learning professional and impressive web
                skills, I have the expertise to create intuitive and meaningful
                software applications. It is my ambition to collaborate with a
                team that values continuous learning and diverse thinking.
              </p>
            </div>
            <div className="aboutHead">
              <img
                src={require('../images/montanaProfile.jpeg')}
                className="aboutPhoto"
                alt="Montana Kleinman"
              />
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default About;
