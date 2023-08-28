import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Profile from '../Profile/Profile.js';
import Footer from '../Footer/Footer';
import AddItemModal from '../AddItemModal/AddItemModal';
import { getForcastWeather, parseWeatherData, getItems, postItems, deleteItem } from '../../utils/Api.js';
import ItemModal from '../ItemModal/ItemModal';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext.js';
import { Route, Switch } from 'react-router-dom';


function App() {
  const [items, setItems] = React.useState([]);
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
  };

  const handleAddItem = (item) => {
    postItems(item)
    .then(res => {
      setItems([res, ...items]);
    })
    .catch(err => {
      console.error(err);
    })
  }

  const handleDeleteItem = (item) => {
    deleteItem(item._id)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })

    const updatedItemsArray = items.filter(i => {
      return i != item;
    })

    setItems(updatedItemsArray);
    handleCloseModal();
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
          <Route>
            <Profile temperature={temp} clothes={items} onSelectedCard={handleSelectedCard} onCreateModal={handleCreateModal} path='/profile'/>
          </Route>
        </Switch>
        <Footer/>
        {activeModal === 'create' && (<AddItemModal onClose={handleCloseModal} onAddItem={handleAddItem} />)}
        {activeModal === 'preview' && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} onDeleteItem={handleDeleteItem}/>
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
