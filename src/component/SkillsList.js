import React from 'react';
import MDLComponent from '../utils/MDLComponent.js';
import Skill from './Skill.js';

class SkillsList extends MDLComponent {
  render() {
    return (
      <div className="skillsList">
        <h2>{this.props.title}</h2>
        <ul className="mdl-list">
          {this.props.items.map((item) => <Skill item={item}/>)}
        </ul>
      </div>
    );
  }
}

export default SkillsList;
