import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";
import wall from "../assets/icons/wall.svg";
import icon from "../assets/icons/hh-landing.svg";
import menu from "../assets/icons/menu.svg";
import user1 from "../assets/icons/user1.svg";

function Header() {
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
        {/* <h1 className="header__dashboard--house-name">Happy House</h1> */}
      </div>
      <div className="header__menu">
        <button className="header__cta">
          <img className="header__cta--img" src={menu} alt="" />
        </button>
        <div className="menu">
          <div className="menu__wrapper">
            <img className="menu__wrapper--icon" src={user1} alt="" />
            <h3 className="menu__wrapper--user-name">Username</h3>
          </div>
          <div className="menu__options">
            <Link className="menu__options--link" to={`/profile`}>
              <button className="menu__options--btn">Profile</button>
            </Link>
            <Link className="menu__options--link" to={`/my-house`}>
              <button className="menu__options--btn">My Happy House</button>
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
