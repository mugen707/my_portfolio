import React from 'react';
import '../styles/Skills.css';
import pythonIcon from '../assets/python.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import linuxIcon from '../assets/linux.png';
import pcIcon from '../assets/pc.png';
import seoIcon from '../assets/seo.png';
import settingsIcon from '../assets/settings.png';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-icon">
          <img src={pythonIcon} alt="Python" className="icon" />
        </div>
        <div className="skill-icon">
          <img src={htmlIcon} alt="HTML" className="icon" />
        </div>
        <div className="skill-icon">
          <img src={cssIcon} alt="CSS" className="icon" />
        </div>
        <div className="skill-icon">
          <img src={linuxIcon} alt="Linux" className="icon" />
        </div>
        <div className="skill-icon">
          <img src={pcIcon} alt="PC" className="icon" />
        </div>
        <div className="skill-icon">
          <img src={seoIcon} alt="seo" className="icon" />
        </div>
        <div className="skill-icon">
          <img src={settingsIcon} alt="Settings" className="icon" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
