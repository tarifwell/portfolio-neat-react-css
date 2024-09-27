import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__content-box">
        <div className="hero-section__content">
          <p className="section__title">Hey, I'm John</p>
          <h1 className="hero-section__title">
            <span className="hero-section__title-color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero-section__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
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