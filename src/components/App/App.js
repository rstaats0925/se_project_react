import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import {defaultClothingItems} from '../../utils/constants.js';
import { getForcastWeather, parseWeatherData } from '../../utils/Api.js';
import ItemModal from '../ItemModal/ItemModal';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext.js';
import { Route, Switch } from 'react-router-dom';


function App() {
  const [items, setItems] = React.useState(defaultClothingItems);
  const [activeModal, setActiveModal] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState({});
  const [temp, setTemp] = React.useState(69);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F');

  const handleCreateModal = () => {
    setActiveModal('create');
  }

  const handleCloseModal = () => {
    setActiveModal('');
  }

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  }

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  }

  React.useEffect(() => {
    getForcastWeather()
    .then(data => {
      const temperature = parseWeatherData(data);
      setTemp(temperature);
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
        <Header onCreateModal={handleCreateModal}/>
        <Switch>
          <Route exact path='/'>
            <Main temperature={temp} clothes={items} onSelectedCard={handleSelectedCard}/>
          </Route>
          <Route>
            <Profile temperature={temp} clothes={items} onSelectedCard={handleSelectedCard} path='/profile'/>
          </Route>
        </Switch>
        <Footer/>
        {activeModal === 'create' && (
        <ModalWithForm name="New Garment" buttonText="Add Garment" title="New Garment" onClose={handleCloseModal}>
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
        </ModalWithForm>)}
        {activeModal === 'preview' && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal}/>
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
