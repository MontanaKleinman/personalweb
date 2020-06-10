import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function About() {
  return (
    <div id="about" className="scrollEffect about__outlineBlueprint">
      <div className="sectionTitle">
        <h2 className="subTitle">About Me</h2>
      </div>
      <div className="about__contentBlueprint">
        <div className="about__content">
          <ScrollAnimation
            className="about__text"
            animateIn="slideInLeft"
            animateOut="fadeOut"
          >
            <p className="about__text__intro textTitle">
              <strong> Web Developer</strong> and
              <strong> Teacher</strong>.
            </p>
            <p className="about__text__paragraph">
              With experience as a learning professional and impressive web
              skills, I have the expertise to create intuitive and meaningful
              software applications. It is my ambition to collaborate with a
              team that values continuous learning and diverse thinking.
            </p>
          </ScrollAnimation>
          <ScrollAnimation
            className="about__photo"
            animateIn="slideInRight"
            animateOut="fadeOut"
          >
            <img
              src={require('../images/montanaProfile.jpeg')}
              alt="Montana Kleinman"
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}

export default About;
