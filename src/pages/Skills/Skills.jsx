import React from 'react';
import data from "../../data/index.json";

import './Skills.css';

const Skills = () => {
  return (
    <section className="skillsSection" id="mySkills">
      <div className="portfolio__container">
        <p className="section-title">My Skills</p>
        <h2 className="skillsSection__heading">My Expertise</h2>
      </div>
      <div className="skillsSection__container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skillsSection__card">
            <div className="skillsSection-img">
              <img src={item.src} alt="Product Chain" />
            </div>
            <div className="skillsSection__card-content">
              <h3 className="skillsSection-title">{item.title}</h3>
              <p className="skillsSection__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;