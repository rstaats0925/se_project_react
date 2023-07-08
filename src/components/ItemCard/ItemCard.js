import React from 'react';
import './ItemCard.css';

function ItemCard ({name, link}) {
  return (
    <>
      <img className='item__image' src={link} alt={name}/>
      <div className='item__name_background'>
        <p className='item__name'>{name}</p>
      </div>
    </>
  );
}

export default ItemCard;