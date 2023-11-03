import React from "react";
import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({
  clothes,
  onSelectedCard,
  temperature,
  onCreateModal,
  openEdit,
  onCardLike,
  onLogOut,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className="Profile">
      <SideBar
        openEdit={openEdit}
        avatar={currentUser.avatar}
        name={currentUser.name}
        onLogOut={onLogOut}
      />
      <ClothesSection
        clothes={clothes}
        onSelectedCard={onSelectedCard}
        temperature={temperature}
        onCreateModal={onCreateModal}
        onCardLike={onCardLike}
      />
    </div>
  );
}

export default Profile;
