import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function Join() {
  // Display elements onClick event
  let removeBtns = () => {
    let createNew = document.getElementsByClassName("join__cta")[0];
    createNew.style.display = "none";
    let joinHouse = document.getElementsByClassName("join__cta")[1];
    joinHouse.style.display = "none";
  };

  let createNew = (event) => {
    let joinComponent = document.getElementsByClassName("join__container")[0];
    joinComponent.style.display = "flex";
    removeBtns();
  };

  let joinHouse = (event) => {
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

  return (
    <div className="join">
      <button className="join__cta" onClick={createNew}>
        Create a new Happy House
      </button>
      <div className="join__container">
        <h2 className="join__title">Let's build your Happy House</h2>
        <form className="join__form" action="">
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
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select className="join__input" name="color" id="color">
            <option value="0">Select a Color:</option>
            <option value="1">Yellow</option>
            <option value="2">Green</option>
            <option value="3">Coral</option>
            <option value="4">Lilac</option>
          </select>
          <select className="join__input" name="icon" id="icon">
            <option value="0">Select your Avatar:</option>
            <option value="1">user1</option>
            <option value="2">user2</option>
            <option value="3">user3</option>
            <option value="4">user4</option>
          </select>
        </form>
        <Link className="join__btn-link" to={`/dashboard`}>
          <button className="join__btn">JOIN</button>
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
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select className="join__input" name="color" id="color">
            <option value="0">Select a Color:</option>
            <option value="1">Yellow</option>
            <option value="2">Green</option>
            <option value="3">Coral</option>
            <option value="4">Lilac</option>
          </select>
          <select className="join__input" name="icon" id="icon">
            <option value="0">Select your Avatar:</option>
            <option value="1">user1</option>
            <option value="2">user2</option>
            <option value="3">user3</option>
            <option value="4">user4</option>
          </select>
        </form>
        <Link className="join__btn-link" to={`/dashboard`}>
          <button className="join__btn">JOIN</button>
        </Link>
      </div>
      <Link className="join__btn-link-cancel" to={`/`}>
        <button className="join__cta--cancel">Cancel</button>
      </Link>
    </div>
  );
}

export default Join;
