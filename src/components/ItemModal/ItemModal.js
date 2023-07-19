import './ItemModal.css';

function ItemModal ({selectedCard, onClose}) {
  return (
    <div className="modal ItemModal">
      <div className="modal__content ItemModal__content">
      <button className='ItemModal__close-button' type='button' onClick={onClose}></button>
        <img className="ItemModal__image" src={selectedCard.link}/>
        <p className="ItemModal__item-name">{selectedCard.name}</p>
        <p className="ItemModal__weather-type">Weather: {selectedCard.weather}</p>
      </div>
    </div>
  )
}

export default ItemModal;