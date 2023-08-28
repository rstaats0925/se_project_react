import React from 'react';
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({clothes, onSelectedCard, temperature, onCreateModal}) {
  return (
    <div className='Profile'>
      <SideBar />
      <ClothesSection clothes={clothes} onSelectedCard={onSelectedCard} temperature={temperature} onCreateModal={onCreateModal} />
    </div>
  )
}

export default Profile;
