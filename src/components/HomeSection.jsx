import React from 'react';

function Home() {
  return (
    <div id="home" className="scrollEffect homeBox homeAdjustments">
      <div className="homeScreen">
        <ul className="navBar subTitle">
          <li className="highlight">
            <a href="#home">Home</a>
          </li>
          <li className="highlight">
            <a href="#about">About</a>
          </li>
          <li className="highlight">
            <a href="#resume">Resume</a>
          </li>
          <li className="highlight">
            <a href="#projects">Projects</a>
          </li>
          <li className="highlight">
            <a href="#skills">Skills</a>
          </li>
          <li className="highlight">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="homeContent">
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
