import React from "react";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ selectedCard, onClose, onDeleteItem }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `ItemModal__delete-button_${
    isOwn ? "visible" : "hidden"
  }`;

  return (
    <div className="modal ItemModal">
      <div className="modal__content ItemModal__content">
        <button
          className="ItemModal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="ItemModal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <p className="ItemModal__item-name">{selectedCard.name}</p>
        <p className="ItemModal__weather-type">
          Weather: {selectedCard.weather}
        </p>
        <button
          className={itemDeleteButtonClassName}
          type="button"
          onClick={() => {
            onDeleteItem(selectedCard);
          }}
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
