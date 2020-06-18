import React from "react";
import "./styles/main.css";
import user1 from "../assets/icons/user1.svg";
import Header from "./Header";

function Profile(props) {
  return (
    <div>
      <Header />
      <div>
        <h2>Username</h2>
        <img src={user1} alt="" />
      </div>
      <div>
        <p>User Name</p>
        <button>Change User Name</button>
        <p>E-mail</p>
        <button>Change E-mail</button>
        <p>Password</p>
        <button>Change Password</button>
        <p>User Icon</p>
        <button>Change Icon</button>
        <p>User Color</p>
        <button>Change Color</button>
      </div>
    </div>
  );
}

export default Profile;
