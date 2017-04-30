import React, { Component } from 'react';
import Card from './Card.js';

class CardList extends Component {
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
