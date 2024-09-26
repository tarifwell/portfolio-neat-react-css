import React from 'react';

import './About.css';

const About = () => {
  return (
    <section id="AboutMe" className="aboutSection">
      <div className="aboutSection-img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="heroSection__content-box">
        <div className="heroSection__content">
          <p className="section-title">About</p>
          <h1 className="skillsSection__heading">About Me</h1>
          <p className="heroSection__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="heroSection__description">
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