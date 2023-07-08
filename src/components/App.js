import './App.css';
import React from 'react';
import Header from './Header/Header.js';
import Weather from './Weather/Weather.js';
import ItemCard from './ItemCard/ItemCard.js';
import defaultClothingItems from '../utils/utils.js';

function App() {
  const [items, setItems] = React.useState(defaultClothingItems);

  return (
    <div className="App">
      <Header></Header>
      <main>
        <Weather day={true} type='sunny'></Weather>
        <section className='card-items'>
        <p className='card-items__message'>Today is 75&#176;F / You may want to wear:</p>
        <ul className='card-items__list'>
          {items.map((item) => (
            <li className='item' key={item._id}>
              <ItemCard link={item.link} name={item.name}></ItemCard>
            </li>
          ))}
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
