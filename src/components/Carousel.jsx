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
      interval={false}
      controls={true}
      indicators={true}
    >
      <Carousel.Item>
        <a
          href="https://montanakleinman.ca/checkers.html"
          target="_blank"
          title="Checkers"
          rel="noopener noreferrer"
        >
          <Carousel.Caption>
            <h3 className="gameTitle">Checkers</h3>
            <p>A Two Player Checker Recreation</p>
            <p>&lt; A React and Redux Project &gt;</p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a
          href="https://montanakleinman.ca/pair-up.html"
          target="_blank"
          title="Pair Up"
          rel="noopener noreferrer"
        >
          <Carousel.Caption>
            <h3 className="gameTitle">Pair Up</h3>
            <p>A Cooperative and Competitive Card Matching Game</p>
            <p>&lt; A JavaScript and jQuery Project &gt;</p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
