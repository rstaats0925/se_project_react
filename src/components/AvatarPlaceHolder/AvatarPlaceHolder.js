import React from "react";
import "./AvatarPlaceHolder.css";

function AvatarPlaceHolder({ name }) {
  return <div className="placeholder">{name[0]}</div>;
}

export default AvatarPlaceHolder;
