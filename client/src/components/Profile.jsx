import React from "react";
import "./styles/main.css";
import usericon from "../assets/icons/user3.svg";
import Header from "./Header";

function Profile(props) {
  return (
    <>
      <Header
        house={props.house}
        user={props.user}
        updateHouseHandler={props.updateHandler}
        userStateUpdateMethod={props.userStateUpdateMethod}
      />
      <div className="profile">
        <div className="profile__info">
          <img className="profile__info--user-icon" src={usericon} alt="" />
          <h2 className="profile__info--user-name">{props.user.userName}</h2>
        </div>
        <form className="update">
          <input
            className="update__input"
            type="text"
            placeholder={props.user.userName}
          />
          <button className="update__btn">Update User Name</button>
          <input
            className="update__input"
            type="text"
            placeholder={props.user.email}
          />
          <button className="update__btn">Update E-mail</button>
          <input
            className="update__input"
            type="text"
            placeholder="Current Password"
          />

          <button className="update__btn">Update Password</button>
          <input
            className="update__input"
            type="text"
            placeholder="Current User Icon"
          />

          <button className="update__btn">Update Icon</button>
          <input
            className="update__input"
            type="text"
            placeholder={props.user.color}
          />

          <button className="update__btn">Update Color</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
