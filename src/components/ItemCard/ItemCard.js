import React from 'react';
import './ItemCard.css';

function ItemCard ({name, link, key}) {
  console.log(key);
  return (
    <li key={key}>
        <p className='item__name'>{name}</p>
    </li>
  );
}

export default ItemCard;