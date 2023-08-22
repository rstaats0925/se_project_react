import React from 'react';
import ItemCard from '../ItemCard/ItemCard.js';
import './ClothesSection.css';

function ClothesSection({clothes, onSelectedCard, temperature}) {
  const fahrenheit = temperature.F;

  const weatherType = React.useMemo(() => {
    if (fahrenheit < 50) {
      return "cold";
    } else if (fahrenheit >= 50 && fahrenheit < 70 ) {
      return "warm";
    } else if (fahrenheit >= 70) {
      return "hot";
    }
  }, [fahrenheit]);

  const appropriateClothing = clothes.filter(clothing => {
    return clothing.weather === weatherType;
  });

  const clothingItems = appropriateClothing.map(item => {
    return (
      <li className="clothes__item" key={item._id}>
        <ItemCard item={item} onSelectedCard={onSelectedCard} />
      </li>
    )
  });

  return (
    <div className='clothesSection'>
      <p className='clothesSection__message'>Your items</p>
      <button className='clothesSection__button'>+ Add new</button>
      <ul className='clothesSection__flex-container'>
        {clothingItems}
      </ul>
    </div>
  )
}

export default ClothesSection;