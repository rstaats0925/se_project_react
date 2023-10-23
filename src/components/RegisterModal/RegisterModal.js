import React from 'react';
import './RegisterModal.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm';

function RegisterModal({ onClose, onRegister }) {
  // declare state for each input field
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState('');

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  }

  const handleSubmit = (event, values) => {
    event.preventDefault();
    onRegister(values);
  }

  return (
    <ModalWithForm buttonText='Next' title='Sign up' onClose={onClose} onSubmit={event => handleSubmit(event, {name, avatar, email, password})}>
      <div className='input-block'>
        <label className='input-block__label' htmlFor='registerEmail'>Email*</label>
        <input
        className='input-block__input'
        placeholder='Email'
        type='email'
        name='email'
        id='registerEmail'
        onChange={handleEmailChange}
        value={email}
        />
      </div>
      <div className='input-block'>
        <label className='input-block__label' htmlFor='Registerpassword'>Password*</label>
        <input
        className='input-block__input'
        placeholder='Password'
        type='password'
        id='Registerpassword'
        name='password'
        onChange={handlePasswordChange}
        value={password}
        />
      </div>
      <div className='input-block'>
        <label className='input-block__label' htmlFor='registerName'>Name</label>
        <input
        className='input-block__input'
        placeholder='Name'
        type='text'
        name='name'
        id='registerName'
        onChange={handleNameChange}
        value={name}
        />
      </div>
      <div className='input-block'>
        <label className='input-block__label' htmlFor='registerAvatar'>Avatar URL</label>
        <input
        className='input-block__input'
        placeholder='Avatar URL'
        type='url'
        name='avatar'
        id='registerAvatar'
        onChange={handleAvatarChange}
        value={avatar}
        />
      </div>
    </ModalWithForm>
  )
}

export default RegisterModal;
