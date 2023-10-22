import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './LoginModal.css';

function LoginModal({onClose}) {
  return (
    <ModalWithForm name="signUp" buttonText="Next" title="Log in" onClose={onClose}>
      <div className='form'>
        <div className='form__input-block'>
          <label htmlFor='email' className='input-block__label'>Email</label>
          <input
          id='email'
          name='email'
          type='email'
          placeholder='Email'
          className='input-block__input'
          />
        </div>
        <div className='form__input-block'>
          <label htmlFor='password' className='input-block__label'>Password</label>
          <input
          type='password'
          id='password'
          name='password'
          placeholder='Password'
          className='input-block__input'
           />
        </div>
      </div>
    </ModalWithForm>
  )
}

export default LoginModal;