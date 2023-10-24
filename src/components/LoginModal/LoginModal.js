import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

function LoginModal({onClose, handleRegister}) {
  return (
    <ModalWithForm name="signUp" buttonText="Next" title="Log in" onClose={onClose}>
        <div className='input-field'>
          <label htmlFor='email' className='input-field__label'>Email</label>
          <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          className='input-field__input'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='password' className='input-field__label'>Password</label>
          <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          className='input-field__input'
           />
        </div>
        <div className='button-container'>
          <button className='button-container__login' type="submit">Log in</button>
          <button className='button-container__register' type='button' onClick={handleRegister}>or Register</button>
        </div>
    </ModalWithForm>
  )
}

export default LoginModal;