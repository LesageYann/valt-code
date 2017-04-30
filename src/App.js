import React, { Component } from 'react';
import UserAside from './component/UserAside';
import CardList from './component/CardList';
import exp from './component/exp.json';
import contributions from './component/contributions.json';

class App extends Component {
  render() {
    return (
      <div className="root">
      <UserAside />
        <div id="main">
          <CardList title="Expériences" items={exp} />
          <CardList title="Contributions" items={contributions} />
        </div>
      </div>
    );
  }
}

export default App;
