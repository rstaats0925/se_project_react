import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./EditProfileModal.css";
function EditProfileModal({ onClose, onUpdate }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [avatar, setAvatar] = React.useState(currentUser.avatar);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmission = (event, name, avatar) => {
    event.preventDefault();
    onUpdate({ name, avatar }).then((update) => {
      onClose();
    });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      onSubmit={(event) => handleSubmission(event, name, avatar)}
    >
      <div className="input-field">
        <label className="input-field__label" htmlFor="edit-name">
          Name*
        </label>
        <input
          className="input-field__input"
          name="name"
          id="edit-name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-field__label" htmlFor="edit-avatar">
          Avatar
        </label>
        <input
          className="input-field__input"
          name="avatar"
          id="edit-avatar"
          type="url"
          placeholder="Avatar"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </div>
      <button className="edit-profile-submit-button" type="submit">
        Save Changes
      </button>
    </ModalWithForm>
  );
}

export default EditProfileModal;
