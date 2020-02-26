import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      interval={null}
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <a
          href="https://montanakleinman.ca/pair-up.html"
          target="_blank"
          title="Pair Up"
          rel="noopener noreferrer"
        >
          <Carousel.Caption>
            <h3 className="gameTitle">Pair Up</h3>
            {/* <p>A Cooperative and Competitive Card Matching Game</p> */}
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
