import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Main from '../Main/Main';
import defaultClothingItems from '../../utils/utils.js';

function App() {
  const [items, setItems] = React.useState(defaultClothingItems);
  const temp = "78"
  return (
    <div className="App">
      <Header/>
      <Main temperature={temp} clothes={items}/>      
    </div>
  );
}

export default App;
