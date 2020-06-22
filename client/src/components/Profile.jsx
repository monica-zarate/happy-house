import React from "react";
import "./styles/main.css";
import usericon from "../assets/icons/user3.svg";

function Profile(props) {
  return (
    <>
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
            placeholder="Enter a New Password"
          />

          <button className="update__btn">Update Password</button>
          <select className="update__input" name="color" id="color">
            <option value="0">Select a Color:</option>
            <option value="1">Yellow</option>
            <option value="2">Green</option>
            <option value="3">Coral</option>
            <option value="4">Lilac</option>
          </select>
          <button className="update__btn">Update Color</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
