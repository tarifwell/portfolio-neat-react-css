import React from 'react';

import './About.css';

const About = () => {
  return (
    <section id="about" className="section-container-grid about-section">
      <div className="about-section__img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero-section__content-box">
        <div className="hero-section__content">
          <p className="section-title">About</p>
          <h2 className="section-heading">About Me</h2>
          <p className="hero-section__description">
            I'm a Front-End Developer. I'm passionate about coding. 
            New diplomate and curious. I work essentially with HTML, 
            CSS, Javascript and React. I do also Back-End Development 
            with Node.js, Express and MongoDB. I have some works on web, 
            desktop and mobile development.            
          </p>
          <p className="hero-section__description">
            Feel free to show my portofolio and to discover more about me.
            Have a good day and don't hesitate to contact me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
