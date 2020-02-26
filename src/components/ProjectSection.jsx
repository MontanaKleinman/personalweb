import React from 'react';
import ControlledCarousel from './Carousel';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function Project() {
  return (
    <div id="projects" className="scrollEffect contentBox projectAdjustments">
      <div className="sectionTitle">
        <h2 className="subTitle">Web Portfolio</h2>
      </div>
      <div className="projectScreen">
        <ScrollAnimation animateIn="zoomIn" animateOut="fadeOut">
          <div className="carouselBox">
            <ControlledCarousel />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

export default Project;
