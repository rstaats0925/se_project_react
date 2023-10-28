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
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterModal from '../RegisterModal/RegisterModal';
import EditProfileModal from '../EditProfileModal/EditProfileModal';
import { signUp, signIn, verifyToken, updateUser } from '../../utils/Auth';


function App() {
  const [items, setItems] = React.useState([]);
  const [activeModal, setActiveModal] = React.useState('');
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [temp, setTemp] = React.useState(69);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = React.useState('F');
  const [currentUser, setCurrentUser] = React.useState({name: "Terrence Tegegne", avatar: "www.google.com"});

  const handleCreateModal = () => {
    setActiveModal('create');
  }

  const handleLogInModal = () => {
    setActiveModal('');
    setActiveModal('login')
  }

  const handleRegisterModal = () => {
    setActiveModal('');
    setActiveModal('register');
  }

  const handleEditProfileModal = () => {
    setActiveModal('profile');
  }

  const handleCloseModal = () => {
    setActiveModal('');
  }

  const processRegistration = (values) => {
    return signUp(values)
      .then(res => {
        handleCloseModal();
        handleSignIn(values);
      })
      .catch(err => console.error(`Error: ${err.message}`));
  }

  const handleSignIn = (values) => {
    signIn(values)
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);
        }
      })
      .catch(err => console.error(`Error: ${err.message}`));
  }

  const handleUserUpdate = (values) => {
    const token = localStorage.get('jwt');
    updateUser(token, values)
      .then(user => console.log(user))
      .catch(err => console.error(`Error: ${err.message}`))
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

  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const token = localStorage.getItem('jwt');
      verifyToken(token)
        .then(res => res.json())
        .then(user => console.log(user));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
          <Header onCreateModal={handleCreateModal}/>
          <Switch>
            <Route exact path='/'>
              <Main temperature={temp} clothes={items} onSelectedCard={handleSelectedCard}/>
            </Route>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/">
              <Profile temperature={temp} clothes={items} onSelectedCard={handleSelectedCard} onCreateModal={handleCreateModal} openEdit={handleEditProfileModal} path='/profile'/>
            </ProtectedRoute>
          </Switch>
          <Footer/>
          {activeModal === 'create' && (<AddItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />)}
          {activeModal === 'preview' && (
            <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} onDeleteItem={handleDeleteItem} />
          )}
          {activeModal === 'login' && (<LoginModal onClose={handleCloseModal} handleRegister={handleRegisterModal}/>)}
          {activeModal === 'register' && <RegisterModal onClose={handleCloseModal} onRegister={processRegistration} handleLogin={handleLogInModal}/>}
          {activeModal === 'profile' && <EditProfileModal onClose={handleCloseModal} onUpdate={handleUserUpdate} />}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
