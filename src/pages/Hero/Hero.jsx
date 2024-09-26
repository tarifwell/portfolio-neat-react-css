import React from 'react';

import './Hero.css';

const Hero = () => {
  return (
    <section id="heroSection" className="heroSection">
      <div className="heroSection__content-box">
        <div className="heroSection__content">
          <p className="section-title">Hey, I'm John</p>
          <h1 className="heroSection-title">
            <span className="heroSection-title-color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="heroSection__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="heroSection-img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}

export default Hero;