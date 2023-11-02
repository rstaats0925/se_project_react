import React from 'react';
import './ItemCard.css';

function ItemCard ({item, onSelectedCard, user, onCardLike}) {
  const id = item._id;
  let isLiked = item.likes.includes(user._id);
  let likeButtonStyle = `ItemCard__like-button_${isLiked ? 'active' : 'inactive'}`;

  const handleLikeClick = (event, {isLiked, id}) => {
    event.preventDefault();
    onCardLike({isLiked, id})
  }
  
  return (
      <div className='ItemCard'>
        <img className='ItemCard__image' alt={item.name} src={item.imageUrl} onClick={() => onSelectedCard(item)}/>
        <div className='ItemCard__header'>
          <p className='ItemCard__name'>{item.name}</p>
          <button className={`ItemCard__like-button ${likeButtonStyle}`} type='button' onClick={event => handleLikeClick(event, {isLiked, id})}></button>
        </div>
      </div>
  );
}

export default ItemCard;
