import React from 'react';
import './Profile.css';
import Sidebar from '../SideBar/Sidebar';
import ClothesSection from '../ClothesSection/ClothesSection';

function Profile() {
  return (
    <div className='Profile'>
      <div>Profile</div>
      <Sidebar />
      <ClothesSection />
    </div>
  )
}

export default Profile;
