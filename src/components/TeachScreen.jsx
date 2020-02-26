import React, { useState } from 'react';
import { teachInfo } from '../resumeInfo';
import Carousel from 'react-bootstrap/Carousel';

function TeachScreen(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
    activeText(selectedIndex);

    function activeText(selectedIndex) {
      props.setText(
        teachInfo[selectedIndex].description.map((sentence, index) => (
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
          <p>{teachInfo[0].qualification}</p>
          <p>{teachInfo[0].institution}</p>
          <p>{teachInfo[0].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{teachInfo[1].qualification}</p>
          <p>{teachInfo[1].institution}</p>
          <p>{teachInfo[1].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{teachInfo[2].qualification}</p>
          <p>{teachInfo[2].institution}</p>
          <p>{teachInfo[2].date}</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default TeachScreen;
