import React from 'react';
import MDLComponent from './../utils/MDLComponent.js';
import user from './userData.json';

class UserAside extends MDLComponent {
  render() {
    return (
      <aside className="user-aside">
        <div className="user-avatar">
           <img src={user.avatar} alt="user avatar" />
        </div>
        <p className="user-bio">
          {user.bio}
        </p>
      </aside>
    );
  }
}

export default UserAside;
