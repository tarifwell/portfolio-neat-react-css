import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="section-container-grid hero-section">
      <div className="hero-section__content-box">
        <div className="hero-section__content">
          <p className="section-title">Hey, I'm Tarek</p>
          <h1 className="section-heading section-heading-hero">
            <span className="hero-section__heading">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero-section__description">
            I'm a Front-End Developer. I'm passionate about coding.
            <br /> 
            Welcome to my portfolio !
          </p>
        </div>
        <button className="btn btn--primary">Get In Touch</button>
      </div>
      <div className="hero-section__img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

export default Hero;