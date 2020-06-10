import React from 'react';
import Home from './home/pages/Home';
import About from './about/pages/About';
import Resume from './resume/pages/Resume';
import Project from './project/pages/Project';
import Skill from './skill/pages/Skill';
import Contact from './contact/pages/Contact';
import Navigation from './navigation/pages/Navigation';
import Footer from './footer/pages/footer';
import './app.scss';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
