import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import LoginModal from '../LoginModal/LoginModal';
import { getForcastWeather, parseWeatherData, getItems, postItems, deleteItem } from '../../utils/Api.js';
import ItemModal from '../ItemModal/ItemModal';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext.js';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterModal from '../RegisterModal/RegisterModal';
import { signUp } from '../../utils/Auth';


function App() {
  const [items, setItems] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState('register');
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
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
  };

  const handleAddItem = (item) => {
    postItems(item)
    .then(res => {
      setItems([res, ...items]);
      handleCloseModal();
    })
    .catch(err => {
      console.error(err);
    })
  }

  const handleDeleteItem = (item) => {
    deleteItem(item._id)
    .then(res => {
      const updatedItemsArray = items.filter(i => {
        return i != item;
      })
      setItems(updatedItemsArray);
      handleCloseModal();
    })
    .catch(err => {
      console.error(err);
    })
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

  React.useEffect(() => {
    getItems()
    .then(data => {
      setItems(data);
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
          <ProtectedRoute isLoggedIn={isLoggedIn} path="/">
            <Profile temperature={temp} clothes={items} onSelectedCard={handleSelectedCard} onCreateModal={handleCreateModal} path='/profile'/>
          </ProtectedRoute>
        </Switch>
        <Footer/>
        {activeModal === 'create' && (<AddItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />)}
        {activeModal === 'preview' && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} onDeleteItem={handleDeleteItem} />
        )}
        {activeModal === 'login' && (<LoginModal onClose={handleCloseModal} />)}
      </CurrentTemperatureUnitContext.Provider>
        {activeModal === 'register' && <RegisterModal onClose={handleCloseModal} onRegister={signUp} />}
    </div>
  );
}

export default App;
