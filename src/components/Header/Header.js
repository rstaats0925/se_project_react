import React from 'react';
import './Header.css';
import logo from '../../images/wtwr.svg';
import avatar from '../../images/avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom'; 
import AvatarPlaceHolder from '../AvatarPlaceHolder/AvatarPlaceHolder';

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
// Terrence Tegegne

function Header({onCreateModal, user}) {
  return (
    <header className="header">
      <div className='logo'>
        <Link to="/">
          <img src={logo} alt="logo" className='header__logo'></img>
        </Link>
        <div className='header__date'>{currentDate}, location</div>
      </div>
      <div className='header__user'>
        <div className='header__button-username'>
          <ToggleSwitch />
          <button className='header__add-clothes' type="button" onClick={onCreateModal}>+ Add clothes</button>
          <Link to="/profile">
            <div className='header__username'>Terrence Tegegne</div>
          </Link>
        </div>
        {/* <div className='header__avatar-container'><img className='avatar' src={avatar} alt="avatar"></img></div> */}
        <AvatarPlaceHolder name="Terence"/>
      </div>
    </header>
  );
}

export default Header;