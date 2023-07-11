import React from 'react';
import './ItemCard.css';

function ItemCard ({name, imgSrc}) {
  return (
      <p className='item__name'>{name}</p>
  );
}

export default ItemCard;