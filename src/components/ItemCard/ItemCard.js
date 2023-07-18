import React from 'react';
import './ItemCard.css';

function ItemCard ({name, link}) {
  return (
      <div className='ItemCard'>
        <img className='ItemCard__image' src={link}/>
        <p className='ItemCard__name'>{name}</p>
      </div>
  );
}

export default ItemCard;
