import React from 'react';
import './ItemCard.css';

function ItemCard ({item, onSelectedCard}) {
  return (
      <div className='ItemCard'>
        <img className='ItemCard__image' alt={item.name} src={item.imageUrl} onClick={() => onSelectedCard(item)}/>
        <div className='ItemCard__header'>
          <p className='ItemCard__name'>{item.name}</p>
          <button className='ItemCard__like-button'></button>
        </div>
      </div>
  );
}

export default ItemCard;
