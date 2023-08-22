import React from 'react';
import './Profile.css';
import Sidebar from '../SideBar/Sidebar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile({clothes, onSelectedCard, temperature}) {
  return (
    <div className='Profile'>
      <Sidebar />
      <ClothesSection clothes={clothes} onSelectedCard={onSelectedCard} temperature={temperature} />
    </div>
  )
}

export default Profile;
