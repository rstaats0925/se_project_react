import './ItemModal.css';

function ItemModal ({selectedCard, onClose, onDeleteItem}) {
  return (
    <div className="modal ItemModal">
      <div className="modal__content ItemModal__content">
      <button className='ItemModal__close-button' type='button' onClick={onClose}></button>
      <img className="ItemModal__image" src={selectedCard.link} alt={selectedCard.name}/>
      <p className="ItemModal__item-name">{selectedCard.name}</p>
      <p className="ItemModal__weather-type">Weather: {selectedCard.weather}</p>
      <button className='ItemModal__delete' type='button' onClick={onDeleteItem}>Delete item</button>
      </div>
    </div>
  )
}

export default ItemModal;
