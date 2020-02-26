import React, { useState, useEffect } from 'react';

function Navigation() {
  const [navButton, setNavButton] = useState(
    window.innerWidth > 800 ? 'navigation__button hidden' : 'navigation__button'
  );
  const [navMenu, setNavMenu] = useState('navigation__menu hidden');

  useEffect(() => {
    window.onscroll = function() {
      scrollEffect();
    };

    window.onresize = function() {
      if (
        window.innerWidth > 800 &&
        !(document.documentElement.scrollTop + 1 > window.innerHeight)
      ) {
        setNavButton('navigation__button hidden');
      } else {
        setNavButton('navigation__button');
      }
    };

    function scrollEffect() {
      if (window.innerWidth > 800) {
        if (document.documentElement.scrollTop + 1 > window.innerHeight) {
          setNavButton('navigation__button');
        } else {
          setNavButton('navigation__button hidden');
          setNavMenu('navigation__menu hidden');
        }
      }
    }
  });

  function navVisible() {
    setNavMenu(prevNavMenu =>
      prevNavMenu === 'navigation__menu'
        ? 'navigation__menu hidden'
        : 'navigation__menu'
    );
  }

  return (
    <div className="navigation navBarCollapse">
      <button
        id="navButton"
        onClick={navVisible}
        className={navButton}
        aria-label="Click to toggle menu"
      >
        <div className="navigation__bar"></div>
      </button>
      <div className={navMenu}>
        <ul className="navigation__items">
          <li className="highlight" onClick={navVisible}>
            <a href="#home">Home</a>
          </li>
          <li className="highlight" onClick={navVisible}>
            <a href="#about">About</a>
          </li>
          <li className="highlight" onClick={navVisible}>
            <a href="#resume">Resume</a>
          </li>
          <li className="highlight" onClick={navVisible}>
            <a href="#projects">Projects</a>
          </li>
          <li className="highlight" onClick={navVisible}>
            <a href="#skills">Skills</a>
          </li>
          <li className="highlight" onClick={navVisible}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
