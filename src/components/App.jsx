import React from 'react';
import Home from './HomeSection';
import About from './AboutSection';
import Resume from './ResumeSection';
import Project from './ProjectSection';
import Skill from './SkillSection';
import Contact from './ContactSection';
import Navigation from './Navigation';
import Footer from './FooterSection';

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
