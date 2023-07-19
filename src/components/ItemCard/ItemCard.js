import React from 'react';
import './ItemCard.css';

function ItemCard ({item, onSelectedCard}) {
  return (
      <div className='ItemCard'>
        <img className='ItemCard__image' src={item.link} onClick={() => onSelectedCard(item)}/>
        <p className='ItemCard__name'>{item.name}</p>
      </div>
  );
}

export default ItemCard;
