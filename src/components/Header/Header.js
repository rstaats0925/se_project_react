import React from 'react';
import './Header.css';
import logo from '../../images/wtwr.svg';
import avatar from '../../images/avatar.svg';

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  

function Header() {
  return (
    <div className="header">
      <div className='logo'>
        <img src={logo} alt="logo" className='header__logo'></img>
        <div className='header__date'>{currentDate}, location</div>
      </div>
      <div className='header__user'>
        <div className='header__button-username'>
          <button className='header__add-clothes' type="button">+ Add clothes</button>
          <div className='header__username'>Terrence Tegegne</div>
        </div>
        <div className='header__avatar-container'><img className='avatar' src={avatar} alt="avatar"></img></div>
      </div>
    </div>
  );
}

export default Header;