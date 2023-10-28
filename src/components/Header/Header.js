import React from 'react';
import './Header.css';
import logo from '../../images/wtwr.svg';
import avatar from '../../images/avatar.svg';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { Link } from 'react-router-dom'; 
import AvatarPlaceHolder from '../AvatarPlaceHolder/AvatarPlaceHolder';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
// Terrence Tegegne

function Header({onCreateModal, onRegisterModal, onLogInModal, isLoggedIn}) {

  const currentUser = React.useContext(CurrentUserContext);
  currentUser.avatar = avatar;

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
          {isLoggedIn ? (<div className='header__user-info'>
            <button className='header__add-clothes' type="button" onClick={onCreateModal}>+ Add clothes</button>
            <Link to="/profile">
              <div className='header__username'>{currentUser.name}</div>
            </Link>
            <div className='header__avatar-container'><img className='avatar' src={currentUser.avatar} alt="avatar"></img></div>
          </div>) : 
          (<div className='header__user-info'>
            <button className='header__sign-log-button' type='button' onClick={onRegisterModal}>Sign Up</button>
            <button className='header__sign-log-button' type='button' onClick={onLogInModal}>Log In</button>
          </div>)}
        </div>
        {/* <div className='header__avatar-container'><img className='avatar' src={avatar} alt="avatar"></img></div> */}
        {/* <AvatarPlaceHolder name={currentUser.name}/> */}
      </div>
    </header>
  );
}

export default Header;
