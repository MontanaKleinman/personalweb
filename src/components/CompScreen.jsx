import React, { useState } from 'react';
import { compInfo } from '../resumeInfo';
import Carousel from 'react-bootstrap/Carousel';

function CompScreen(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
    activeText(selectedIndex);
  };

  function activeText(selectedIndex) {
    props.setText(
      compInfo[selectedIndex].description.map((sentence, index) => (
        <li key={index}>{sentence}</li>
      ))
    );
  }

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
          <p>{compInfo[0].qualification}</p>
          <p>{compInfo[0].institution}</p>
          <p>{compInfo[0].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{compInfo[1].qualification}</p>
          <p>{compInfo[1].institution}</p>
          <p>{compInfo[1].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{compInfo[2].qualification}</p>
          <p>{compInfo[2].institution}</p>
          <p>{compInfo[2].date}</p>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="resumeExp">
          <p>{compInfo[3].qualification}</p>
          <p>{compInfo[3].institution}</p>
          <p>{compInfo[3].date}</p>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default CompScreen;
