import React, { Component } from 'react';
import LinkButton from './LinkButton.js';

class Card extends Component {
  render() {
    return (
      <div className="mdc-card">
          <section className="mdc-card__primary">
            <h1 className="mdc-card__title">{this.props.item.title}</h1>
            <h2 className="mdc-card__subtitle">{this.props.item.subhead}</h2>
          </section>
          <section className="mdc-card__media "><img src={this.props.item.photo}/></section>
          <section className="mdc-card__actions">
            {this.props.item.links.map((link) => <LinkButton target={link.target} displayName={link.displayName}/>)}
          </section>
        </div>
    );
  }
}

export default Card;
