import React from 'react';
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({clothes, onSelectedCard, temperature, onCreateModal, openEdit}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className='Profile'>
      <SideBar openEdit={openEdit} avatar={currentUser.avatar} name={currentUser.name} />
      <ClothesSection clothes={clothes} onSelectedCard={onSelectedCard} temperature={temperature} onCreateModal={onCreateModal} />
    </div>
  )
}

export default Profile;
