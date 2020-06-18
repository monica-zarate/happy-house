import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";
import wall from "../assets/icons/wall.svg";
import icon from "../assets/icons/hh-landing.svg";
import menu from "../assets/icons/menu.svg";
import user1 from "../assets/icons/user1.svg";

function Header() {
  return (
    <div>
      <header>
        <div>
          <Link to={`/wall`}>
            <img src={wall} alt="" />
          </Link>
        </div>
        <div>
          <Link to={`/dashboard`}>
            <img src={icon} alt="" />
          </Link>
          <h1>My Happy House</h1>
        </div>
        <div>
          <button>
            <img src={menu} alt="" />
          </button>
          <div>
            <img src={user1} alt="" />
            <h3>Username</h3>
          </div>
          <div>
            <Link to={`/profile`}>
              <button>Profile</button>
            </Link>
            <Link to={`/my-house`}>
              <button>My Happy House</button>
            </Link>
            <Link to={`/`}>
              <button>Log Out</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
