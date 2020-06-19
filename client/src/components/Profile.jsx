import React from "react";
import "./styles/main.css";
import user1 from "../assets/icons/user1.svg";
import Header from "./Header";

function Profile(props) {
  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile__info">
          <img className="profile__info--user-icon" src={user1} alt="" />
          <h2 className="profile__info--user-name">User Name</h2>
        </div>
        <form className="update">
          <input
            className="update__input"
            type="text"
            placeholder="User Name"
          />
          <button className="update__btn">Update User Name</button>
          <input className="update__input" type="text" placeholder="E-mail" />
          <button className="update__btn">Update E-mail</button>
          <input className="update__input" type="text" placeholder="Password" />

          <button className="update__btn">Update Password</button>
          <input
            className="update__input"
            type="text"
            placeholder="User Icon"
          />

          <button className="update__btn">Update Icon</button>
          <input
            className="update__input"
            type="text"
            placeholder="User Color"
          />

          <button className="update__btn">Update Color</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
