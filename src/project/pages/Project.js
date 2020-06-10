import React from 'react';
import Carousel from '../components/Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function Project() {
  return (
    <div id="projects" className="scrollEffect project__outlineBlueprint">
      <div className="sectionTitle">
        <h2 className="subTitle">Web Portfolio</h2>
      </div>
      <div className="project__contentBlueprint">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          className="project__animate"
        >
          <Carousel />
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Project;
