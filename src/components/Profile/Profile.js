import React from 'react';
import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({clothes, onSelectedCard, temperature}) {
  return (
    <div className='Profile'>
      <SideBar />
      <ClothesSection clothes={clothes} onSelectedCard={onSelectedCard} temperature={temperature} />
    </div>
  )
}

export default Profile;
