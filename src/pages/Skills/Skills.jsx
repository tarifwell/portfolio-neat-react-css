import React from 'react';
import data from "../../data/index.json";

import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section-container-flex skills-section">
      <div className="portfolio__container">
        <p className="section__title">My Skills</p>
        <h2 className="skills-section__heading">My Expertise</h2>
      </div>
      <div className="skills-section__container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills-section__card">
            <div className="skills-section__img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skills-section__card-content">
              <h3 className="skills-section__title">{item.title}</h3>
              <p className="skills-section__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;