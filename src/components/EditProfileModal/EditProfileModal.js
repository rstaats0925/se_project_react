import React from 'react';
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import './EditProfileModal.css';
function EditProfileModal({ onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [avatar, setAvatar] = React.useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  }

  return (
    <ModalWithForm title="Change profile data" onClose={onClose}>
      <div className="input-field">
        <label className="input-field__label" htmlFor="edit-name">Name*</label>
        <input 
        className="input-field__input"
        name="name"
        id="edit-name"
        type="text"
        placeholder="Name"
        value={currentUser.name}
        onChange={handleNameChange}
        required />
      </div>
      <div className="input-field">
        <label className="input-field__label" htmlFor="edit-avatar">Avatar</label>
        <input 
        className="input-field__input"
        name="avatar"
        id="edit-avatar"
        type="url"
        placeholder="Avatar"
        onChange={handleAvatarChange}
        value={currentUser.avatar}
        />
      </div>
      <button className="edit-profile-submit-button" type="submit">Save Changes</button>
    </ModalWithForm>
  )
}

export default EditProfileModal;
