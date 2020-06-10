import React, { useState } from 'react';

function Carousel() {
  const [slideNumber, setSlideNumber] = useState(1);
  const firstSlide = 1;
  const lastSlide = 2;

  const previousSlide = function() {
    if (slideNumber === 1) {
      setSlideNumber(lastSlide);
    }
    if (slideNumber === 2) {
      setSlideNumber(firstSlide);
    }
  };

  const nextSlide = function() {
    if (slideNumber === 1) {
      setSlideNumber(lastSlide);
    }
    if (slideNumber === 2) {
      setSlideNumber(firstSlide);
    }
  };

  return (
    <React.Fragment>
      <div
        className={`${
          slideNumber === 1 ? 'carousel__contentBlueprint' : 'carousel__hidden'
        }`}
      >
        <a
          href="https://montanakleinman.ca/checkers.html"
          target="_blank"
          title="Checkers"
          rel="noopener noreferrer"
          className="carousel__content"
        >
          <h3 className="carousel__title">Checkers</h3>
          <div className="carousel__subtitle">
            <p>A Two Player Checker Recreation</p>
            <p>&lt; React and Redux Project &gt;</p>
          </div>
        </a>
        <div className="carousel__buttons">
          <div className="carousel__previous" onClick={previousSlide}>
            <p>Previous</p>
          </div>
          <div className="carousel__next" onClick={nextSlide}>
            <p>Next</p>
          </div>
        </div>
      </div>
      <div
        className={`${
          slideNumber === 2 ? 'carousel__contentBlueprint' : 'carousel__hidden'
        }`}
      >
        <a
          href="https://montanakleinman.ca/pair-up.html"
          target="_blank"
          title="Pair Up"
          rel="noopener noreferrer"
          className="carousel__content"
        >
          <h3 className="carousel__title">Pair Up</h3>
          <div className="carousel__subtitle">
            <p>A Cooperative and Competitive Card Matching Game</p>
            <p>&lt; JavaScript and jQuery Project &gt;</p>
          </div>
        </a>
        <div className="carousel__buttons">
          <div className="carousel__previous" onClick={previousSlide}>
            <p>Previous</p>
          </div>
          <div className="carousel__next" onClick={nextSlide}>
            <p>Next</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Carousel;
