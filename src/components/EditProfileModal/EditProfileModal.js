import ModalWithForm from "../ModalWithForm/ModalWithForm";
import './EditProfileModal.css';
function EditProfileModal({ onClose }) {
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
        />
      </div>
      <button className="edit-profile-submit-button" type="submit">Save Changes</button>
    </ModalWithForm>
  )
}

export default EditProfileModal;