import React from 'react';
import MDLComponent from '../utils/MDLComponent.js';

class LinkButton extends MDLComponent {
  render() {
    return (
      <a href={this.props.target}>
        <button className="mdl-button mdl-button--raised mdl-button--accent mdl-button--compact mdl-card__action">
          {this.props.displayName}
        </button>
      </a>
    );
  }
}

export default LinkButton;
