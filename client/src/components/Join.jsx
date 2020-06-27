import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";
// import House from "./House";
import Axios from "axios";

function Join(props) {
  // Remove Create a New Happy House and Join a Happy House Buttons once one of them gets clicked
  let removeBtns = () => {
    let createNew = document.getElementsByClassName("join__cta")[0];
    createNew.style.display = "none";
    let joinHouse = document.getElementsByClassName("join__cta")[1];
    joinHouse.style.display = "none";
  };

  // createNew, joinHouse and profile Methods to display forms onClick
  let createNew = () => {
    let joinComponent = document.getElementsByClassName("join__container")[0];
    joinComponent.style.display = "flex";
    removeBtns();
  };

  let joinHouse = () => {
    let joinComponent = document.getElementsByClassName("join__container")[1];
    joinComponent.style.height = "50%";
    joinComponent.style.display = "flex";
    removeBtns();
  };

  let profile = (event) => {
    event.preventDefault();
    let joinComponent = document.getElementsByClassName("join__container")[2];
    joinComponent.style.display = "flex";
    let houseName = document.getElementsByClassName("join__container")[1];
    houseName.style.display = "none";
  };

  // Display Success Message Pop-up for New House/User on Click event
  let openPopUp = (event) => {
    event.preventDefault();
    let popUp = document.getElementsByClassName("join__success")[0];
    if (popUp.style.display === "flex") {
      popUp.style.display = "none";
    } else {
      popUp.style.display = "flex";
    }
    // Create New House and New User Methods called on Success Message
    createHouse();
    createUser();
  };

  // Display Success Message Pop-up on Click event for New User Existing House
  let openPopUpExistingHouse = (event) => {
    event.preventDefault();
    let popUp = document.getElementsByClassName("join__success")[0];
    if (popUp.style.display === "flex") {
      popUp.style.display = "none";
    } else {
      popUp.style.display = "flex";
    }
    newUserExistingHouse();
  };

  // Houses API
  let housesApi = "http://localhost:5000/houses/";

  // Create House Method
  let createHouse = () => {
    let newHouse = document.getElementById("house-name").value;
    let newHouseObject = {
      houseName: newHouse,
    };
    Axios.post(housesApi, newHouseObject)
      .then((response) => {
        console.log("New House Added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Users API
  let usersApi = "http://localhost:5000/users";

  // Create New User Method
  let createUser = () => {
    let newUserName = document.getElementById("user-name").value;
    let newEmail = document.getElementById("email").value;
    let newPassword = document.getElementById("password").value;
    let newColor = document.getElementById("color").value;
    let newHouse = document.getElementById("house-name").value;
    let newUser = {
      userName: newUserName,
      email: newEmail,
      password: newPassword,
      houseName: newHouse,
      color: newColor,
    };

    Axios.post(usersApi, newUser)
      .then((response) => {
        console.log("New User Created");
        console.log(response);
        props.userStateUpdateMethod(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Create New User to Join to an existing House Method
  let newUserExistingHouse = () => {
    let newUserName = document.getElementById("user-name-join").value;
    let newEmail = document.getElementById("email-join").value;
    let newPassword = document.getElementById("password-join").value;
    let newColor = document.getElementById("color-join").value;
    let newHouse = document.getElementById("happy-house-name").value;
    let newUser = {
      userName: newUserName,
      email: newEmail,
      password: newPassword,
      houseName: newHouse,
      color: newColor,
    };

    Axios.post(usersApi, newUser)
      .then((response) => {
        console.log("New User Created");
        console.log(response);
        props.userStateUpdateMethod(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="join">
      <button className="join__cta" onClick={createNew}>
        Create a new Happy House
      </button>
      <div className="join__container">
        <h2 className="join__title">Let's build your Happy House</h2>
        <form className="join__form" action="" id="join__form">
          <input
            className="join__input"
            type="text"
            name="house-name"
            id="house-name"
            placeholder="House Name"
          />
          <input
            className="join__input"
            type="text"
            name="user-name"
            id="user-name"
            placeholder="User Name"
          />
          <input
            className="join__input"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="join__input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select className="join__input" name="color" id="color">
            <option value="0">Select a Color:</option>
            <option value="#ffd23f">Yellow</option>
            <option value="#248232">Green</option>
            <option value="#eb9486">Coral</option>
            <option value="#9d8189">Lilac</option>
          </select>
        </form>

        <button onClick={openPopUp} className="join__btn">
          JOIN
        </button>
      </div>
      <div className="join__success">
        <h2 className="join__success--title">Your Happy House was Created!</h2>
        <Link className="join__success--link" to={`/dashboard`}>
          <button className="join__success--btn">Go to Dashboard</button>
        </Link>
      </div>
      <button className="join__cta" onClick={joinHouse}>
        Join a Happy House
      </button>
      <div className="join__container">
        <h2 className="join__title">Enter your House Name</h2>
        <form className="join__form" action="">
          <input
            className="join__input"
            type="text"
            name="happy-house-name"
            id="happy-house-name"
            placeholder="Happy House Name"
          />
          <button className="join__btn" onClick={profile}>
            Next
          </button>
        </form>
      </div>
      <div className="join__container">
        <h2 className="join__title">Create your Profile</h2>
        <form className="join__form" action="">
          <input
            className="join__input"
            type="text"
            name="user-name"
            id="user-name-join"
            placeholder="User Name"
          />
          <input
            className="join__input"
            type="text"
            name="email"
            id="email-join"
            placeholder="Email"
          />
          <input
            className="join__input"
            type="password"
            name="password"
            id="password-join"
            placeholder="Password"
          />
          <select className="join__input" name="color" id="color-join">
            <option value="0">Select a Color:</option>
            <option value="#ffd23f">Yellow</option>
            <option value="#248232">Green</option>
            <option value="#eb9486">Coral</option>
            <option value="#9d8189">Lilac</option>
          </select>
        </form>

        <button className="join__btn" onClick={openPopUpExistingHouse}>
          JOIN
        </button>
      </div>
      <Link className="join__btn-link-cancel" to={`/`}>
        <button className="join__cta--cancel">Cancel</button>
      </Link>
    </div>
  );
}

export default Join;
