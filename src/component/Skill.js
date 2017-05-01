import React from 'react';
import MDLComponent from '../utils/MDLComponent.js';
import LinkButton from './LinkButton.js';
import ReactDOM from 'react-dom';

class Skill extends MDLComponent {
  componentDidMount() {
    var root= ReactDOM.findDOMNode(this);
    var level= this.props.item.level;
    root.getElementsByClassName("mdl-progress")[0].addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(level);
    });
    window.componentHandler.upgradeElement(root);
  }

  render() {
    return (
      <li className="cardSkill">
        <h4>{this.props.item.title}</h4>
        <div className="mdl-progress mdl-js-progress"></div>
      </li>
    );
  }
}

export default Skill;
