import React, { Component } from 'react';

class LinkButton extends Component {
  render() {
    return (
      <a href={this.props.target}>
        <button className="mdc-button mdc-button--raised mdc-button--accent mdc-button--compact mdc-card__action">
          {this.props.displayName}
        </button>
      </a>
    );
  }
}

export default LinkButton;
