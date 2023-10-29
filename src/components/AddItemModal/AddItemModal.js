import React from 'react';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import './AddItemModal.css';

function AddItemModal ({onClose, onAddItem}) {

  //declare state for each input field
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weather, setWeather] = React.useState("");

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  }

  const handleWeatherChange = (event) => {
    setWeather(event.target.value);
  }

  function handleSubmit(event, values) {
    event.preventDefault();
    onAddItem(values);
  }

  return (
    <ModalWithForm name="New Garment" buttonText="Add Garment" title="New Garment" onClose={onClose} onSubmit={(event) => {handleSubmit(event, {name, imageUrl, weather})}}>
      <div className='input-block'>
        <label htmlFor="Name" className='input-block__label'>Name</label>
        <input 
        id="Name"
        name='Name'
        type='text'
        placeholder='Name'
        className='input-block__input'
        onChange={handleNameChange}
        value={name}
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
        onChange={handleUrlChange}
        value={imageUrl}
        />
      </div>
      <p className='weather-type__message'>Select the weather type:</p>
      <div onChange={handleWeatherChange}>
        <div className='radio-block'>
          <input 
          type='radio' 
          id='Hot' 
          name='weather' 
          value='hot'
          className='radio-block__input'
          />
          <label htmlFor="Hot" className='radio-block__label'>Hot</label>
        </div>
        <div className='radio-block'>
          <input 
          type='radio' 
          id='Warm' 
          name='weather' 
          value='warm'
          className='radio-block__input'
          />
          <label htmlFor="Warm" className='radio-block__label'>Warm</label>
        </div>
        <div className='radio-block'>
          <input 
          type='radio' 
          id='Cold' 
          name='weather' 
          value='cold'
          className='radio-block__input'
          />
          <label htmlFor="Cold" className='radio-block__label'>Cold</label>
        </div>
      </div>
      <button className='submit-button' type='submit'>Add Garment</button>
    </ModalWithForm>
  );
}

export default AddItemModal;
