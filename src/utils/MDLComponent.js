import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MDLComponent extends Component {
  componentDidMount() {
    window.componentHandler.upgradeElement(ReactDOM.findDOMNode(this));
  }
  componentWillUnmount() {
    window.componentHandler.downgradeElements(ReactDOM.findDOMNode(this));
  }
}

export default MDLComponent;
