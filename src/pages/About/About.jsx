import React from 'react';

import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-section__img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero-section__content-box">
        <div className="hero-section__content">
          <p className="section__title">About</p>
          <h1 className="skills-section__heading">About Me</h1>
          <p className="hero-section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="hero-section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
