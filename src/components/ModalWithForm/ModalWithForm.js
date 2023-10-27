import './ModalWithForm.css';

function ModalWithForm ({title, name, children, onClose, onSubmit}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className='modal__content'>
        <button className='modal__close-button' type='button' onClick={onClose}></button>
        <h2 className='modal__title'>{title}</h2>
        <form className='modal__form' name={name} onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
} 

export default ModalWithForm;
