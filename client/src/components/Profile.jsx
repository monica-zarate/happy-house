import React from "react";
import "./styles/main.css";
import user1 from "../assets/icons/user1.svg";
import Header from "./Header";

function Profile(props) {
  return (
    <div className="profile">
      <Header />
      <div className="profile__info">
        <h2 className="profile__info--user-name">Username</h2>
        <img className="profile__info--user-icon" src={user1} alt="" />
      </div>
      <div className="update">
        <p className="update__user-name">User Name</p>
        <button className="update__user-name--cta">Change User Name</button>
        <p className="update__email">E-mail</p>
        <button className="update__email--cta">Change E-mail</button>
        <p className="update__pass">Password</p>
        <button className="update__pass--cta">Change Password</button>
        <p className="update__icon">User Icon</p>
        <button className="update__icon--cta">Change Icon</button>
        <p className="update__color">User Color</p>
        <button className="update__color--cta">Change Color</button>
      </div>
    </div>
  );
}

export default Profile;
