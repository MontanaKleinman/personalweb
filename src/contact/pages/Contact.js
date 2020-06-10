import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import linkedIn from '../images/linkedIn.svg';
import github from '../images/github.svg';

function Contact() {
  return (
    <div id="contact" className="scrollEffect contact__outlineBlueprint">
      <div className="sectionTitle">
        <h2 className="subTitle">Care to Learn More?</h2>
      </div>
      <div className="contact__contentBlueprint">
        <div id="particleContainer">
          {[...Array(100)].map((e, i) => {
            return <div key={i} className="particle"></div>;
          })}
        </div>
        <ScrollAnimation
          className="iconLink"
          animateIn="tada"
          delay={1000}
          animateOut="fadeOut"
        >
          <a
            href="https://www.linkedin.com/in/montana-kleinman/"
            title="Montana's LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIn}
              className="icon"
              alt="Montana's LinkedIn Profile"
            />
          </a>
          <a
            href="https://github.com/MontanaKleinman"
            title="Montana's GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="icon" alt="Montana's GitHub Profile" />
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Contact;
