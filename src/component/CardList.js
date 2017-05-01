import React from 'react';
import MDLComponent from '../utils/MDLComponent.js';
import Card from './Card.js';

class CardList extends MDLComponent {
  render() {
    return (
      <div className="cardlist-root">
        <h2>{this.props.title}</h2>
        <div className="cardlist-container">
          {this.props.items.map((item) => <Card item={item}/>)}
        </div>
      </div>
    );
  }
}

export default CardList;
