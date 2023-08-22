import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './AddItemModal.css';

function AddItemModal ({onClose}) {
  return (
    <ModalWithForm name="New Garment" buttonText="Add Garment" title="New Garment" onClose={onClose}>
      <div className='input-block'>
        <label htmlFor="Name" className='input-block__label'>Name</label>
        <input 
        id="Name"
        name='Name'
        type='text'
        placeholder='Name'
        className='input-block__input'
        />
      </div>
      <div className='input-block'>
        <label htmlFor="Image" className='input-block__label'>Image</label>
        <input 
        id="Image"
        name='Image'
        type='url'
        placeholder='Image URL'
        className='input-block__input'
        />
      </div>
      <p className='weather-type__message'>Select the weather type:</p>
      <div className='radio-block'>
        <input 
        type='radio' 
        id='Hot' 
        name='weather' 
        value='Hot'
        className='radio-block__input'
        />
        <label htmlFor="Hot" className='radio-block__label'>Hot</label>
      </div>
      <div className='radio-block'>
        <input 
        type='radio' 
        id='Warm' 
        name='weather' 
        value='Warm'
        className='radio-block__input'
        />
        <label htmlFor="Warm" className='radio-block__label'>Warm</label>
      </div>
      <div className='radio-block'>
        <input 
        type='radio' 
        id='Cold' 
        name='weather' 
        value='Cold'
        className='radio-block__input'
        />
        <label htmlFor="Cold" className='radio-block__label'>Cold</label>
      </div>
    </ModalWithForm>
  );
}

export default AddItemModal;