import React from 'react';
import './Sidebar.css';
import avatar from '../../images/avatar.svg';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__profile-info'>
        <div className='sidebar__avatar-container'><img className='avatar' src={avatar} alt="avatar"></img></div>
        <div className='sidebar__username'>Terrence Tegegne</div>
      </div>
    </div>
  )
}

export default Sidebar;
