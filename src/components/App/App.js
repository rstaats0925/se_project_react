import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import defaultClothingItems from '../../utils/utils.js';

function App() {
  const [items, setItems] = React.useState(defaultClothingItems);
  const temp = "78"
  return (
    <div className="App">
      <Header/>
      <Main temperature={temp} clothes={items}/>
      <Footer/>
      <ModalWithForm name="test form" buttonText="Submit" title="Test Modal"/>
    </div>
  );
}

export default App;
