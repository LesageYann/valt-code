import React from 'react';
import MDLComponent from './utils/MDLComponent.js';
import UserAside from './component/UserAside';
import CardList from './component/CardList';
import AllSkills from './component/AllSkills';
import exp from './component/exp.json';
import contributions from './component/contributions.json';

class App extends MDLComponent {
  render() {
    return (
      <div className="root ">
        <UserAside />
        <div className="mdl-tabs mdl-js-tabs">
          <div className="mdl-tabs__tab-bar">
            <a href="#skill" className="mdl-tabs__tab is-active">Compétences</a>
            <a href="#exp" className="mdl-tabs__tab">Expériences</a>
          </div>
          <div className="main mdl-tabs__panel is-active" id="skill">
            <AllSkills />
          </div>
          <div className="main mdl-tabs__panel" id="exp">
            <CardList title="Expériences" items={exp} />
            <CardList title="Contributions" items={contributions} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
