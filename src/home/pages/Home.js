import React from 'react';

function Home() {
  return (
    <div id="home" className="scrollEffect home__outlineBlueprint">
      <div className="home__contentBlueprint">
        <ul className="subTitle home__navigation">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="home__content">
          <p className="title">Welcome.</p>
          <h1>
            <strong> Personal Website of Montana&nbsp;Kleinman</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
