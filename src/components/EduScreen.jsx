import React, { useState } from 'react';
import { eduInfo } from '../resumeInfo';
import Carousel from 'react-bootstrap/Carousel';

function EduScreen(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
    activeText(selectedIndex);

    function activeText(selectedIndex) {
      props.setText(
        eduInfo[selectedIndex].description.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))
      );
    }
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      interval={null}
      indicators={false}
    >
      <Carousel.Item>
        <div className="resumeExp">
          <p>{eduInfo[0].qualification}</p>
          <p>{eduInfo[0].institution}</p>
          <p>{eduInfo[0].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{eduInfo[1].qualification}</p>
          <p>{eduInfo[1].institution}</p>
          <p>{eduInfo[1].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{eduInfo[2].qualification}</p>
          <p>{eduInfo[2].institution}</p>
          <p>{eduInfo[2].date}</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default EduScreen;
