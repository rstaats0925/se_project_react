import React from 'react';
import './ItemCard.css';

function ItemCard ({name, link}) {
  return (
    <div className="item">
      <img className='item__image' src={link} alt={name}/>
      <p className='item__name'>{name}</p>
    </div>
  );
}

export default ItemCard;