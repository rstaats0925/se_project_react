import React from 'react';
import './SideBar.css';

function SideBar({ openEdit, avatar, name, onLogOut }) {
  const handleLogOut = (event) => {
    event.preventDefault();
    onLogOut();
  }

  return (
    <div className='sidebar'>
      <div className='sidebar__profile-info'>
        <div className='sidebar__avatar-container'><img className='avatar' src={avatar} alt="avatar"></img></div>
        <div className='sidebar__username'>{name}</div>
      </div>
      <button className='sidebar__edit-profile-button' type='button' onClick={openEdit}>Change Profile Data</button>
      <button className='sidebar__log-out' type='button' onClick={event => handleLogOut(event)}>Log out</button>
    </div>
  )
}

export default SideBar;
