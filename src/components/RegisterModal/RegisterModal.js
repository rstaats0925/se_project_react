import React from "react";
import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ onClose, onRegister, handleLogin }) {
  // declare state for each input field
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  // create onChange handlers corresponding to each state variable
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event, values) => {
    event.preventDefault();

    onRegister(values).catch((err) => {
      console.error(`Error: ${err.message}`);
    });
  };

  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign up"
      onClose={onClose}
      onSubmit={(event) =>
        handleSubmit(event, { name, avatar, email, password })
      }
    >
      <div className="input-field">
        <label className="input-field__label" htmlFor="registerEmail">
          Email*
        </label>
        <input
          className="input-field__input"
          placeholder="Email"
          type="email"
          name="email"
          id="registerEmail"
          onChange={handleEmailChange}
          value={email}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-field__label" htmlFor="Registerpassword">
          Password*
        </label>
        <input
          className="input-field__input"
          placeholder="Password"
          type="password"
          id="Registerpassword"
          name="password"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-field__label" htmlFor="registerName">
          Name*
        </label>
        <input
          className="input-field__input"
          placeholder="Name"
          type="text"
          name="name"
          id="registerName"
          onChange={handleNameChange}
          value={name}
          required
        />
      </div>
      <div className="input-field">
        <label className="input-field__label" htmlFor="registerAvatar">
          Avatar URL*
        </label>
        <input
          className="input-field__input"
          placeholder="Avatar URL"
          type="url"
          name="avatar"
          id="registerAvatar"
          onChange={handleAvatarChange}
          value={avatar}
          required
        />
      </div>
      <div className="button-container">
        <button
          className="button-container__login"
          onSubmit={(event) =>
            handleSubmit(event, { name, avatar, email, password })
          }
        >
          Next
        </button>
        <button
          className="button-container__register"
          type="button"
          onClick={handleLogin}
        >
          or Log in
        </button>
      </div>
    </ModalWithForm>
  );
}

export default RegisterModal;
