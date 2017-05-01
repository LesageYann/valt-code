import React from 'react';
import MDLComponent from '../utils/MDLComponent.js';
import LinkButton from './LinkButton.js';

class Card extends MDLComponent {
  render() {
    return (
      <div className="mdl-card">
          <section className="mdl-card__primary">
            <h3 className="mdl-card__title">{this.props.item.title}</h3>
            <h4 className="mdl-card__subtitle">{this.props.item.subhead}</h4>
          </section>
          <section className="mdl-card__media "><img src={this.props.item.photo}/></section>
          <section className="mdl-card__actions">
            {this.props.item.links.map((link) => <LinkButton target={link.target} displayName={link.displayName}/>)}
          </section>
        </div>
    );
  }
}

export default Card;
