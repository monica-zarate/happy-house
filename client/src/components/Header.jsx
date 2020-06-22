import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";
import wall from "../assets/icons/wall.svg";
import icon from "../assets/icons/hh-landing.svg";
import menu from "../assets/icons/menu.svg";
import usericon from "../assets/icons/user3.svg";

function Header(props) {
  // Display Menu Preview on Click event
  let menuPreview = (event) => {
    event.preventDefault();
    let menu = document.getElementsByClassName("menu")[0];
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  return (
    <header className="header">
      <div className="header__wall">
        <Link className="header__wall--link" to={`/wall`}>
          <img className="header__wall--icon" src={wall} alt="" />
        </Link>
      </div>
      <div className="header__dashboard">
        <Link className="header__dashboard--link" to={`/dashboard`}>
          <img className="header__dashboard--icon" src={icon} alt="" />
        </Link>
      </div>
      <div className="header__menu">
        <button className="header__cta" onClick={menuPreview}>
          <img className="header__cta--img" src={menu} alt="" />
        </button>
        <div className="menu">
          <div className="menu__wrapper">
            <img className="menu__wrapper--icon" src={usericon} alt="" />
            <h3 className="menu__wrapper--user-name">{props.user.userName}</h3>
          </div>
          <div className="menu__options">
            <Link className="menu__options--link" to={`/profile`}>
              <button className="menu__options--btn">My Profile</button>
            </Link>
            <Link className="menu__options--link" to={`/my-house`}>
              <button className="menu__options--btn">
                {props.house.houseName}
              </button>
            </Link>
            <Link className="menu__options--link" to={`/`}>
              <button className="menu__options--btn">Log Out</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
