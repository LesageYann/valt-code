import React from 'react';
import MDLComponent from '../utils/MDLComponent.js';
import SkillsList from './SkillsList';
import skillsLang from './skillsLang.json';
import skillsLib from './skillsLib.json';

class AllSkills extends MDLComponent {
  render() {
    return (
      <div className="skill-ui">
        <SkillsList title="Langages" items={skillsLang} />
        <SkillsList title="Libraries" items={skillsLib} />
      </div>
    );
  }
}

export default AllSkills;
