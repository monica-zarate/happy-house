import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function Join(props) {
  return (
    <div className="join">
      <button className="join__new-house">Create a new Happy House</button>
      <div className="new-house">
        <h2 className="new-house__title">Let's build your Happy House</h2>
        <form className="new-house__form" action="">
          <input
            className="new-house__form--house-name"
            type="text"
            name="house-name"
            id="house-name"
            placeholder="House Name"
          />
          <input
            className="new-house__form--user-name"
            type="text"
            name="user-name"
            id="user-name"
            placeholder="User Name"
          />
          <input
            className="new-house__form--email"
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="new-house__form--pass"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select className="new-house__form--color" name="color" id="color">
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="plum">Plum</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
          <select className="new-house__form--icon" name="icon" id="icon">
            <option value="user1">user1</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
            <option value="user4">user4</option>
          </select>
        </form>
        <Link className="new-house__cta" to={`/dashboard`}>
          <button className="new-house__cta--btn">JOIN</button>
        </Link>
      </div>
      <button className="join__connect">Join a Happy House</button>
      <div className="connect">
        <h2 className="connect__title">Enter your House Name</h2>
        <form className="connect__form" action="">
          <input
            className="connect__form--house-name"
            type="text"
            name="happy-house-name"
            id="happy-house-name"
            placeholder="Happy House Name"
          />
          <button className="connect__form--btn">Join</button>
        </form>
      </div>
      <div className="connect__wrapper">
        <form className="connect__input" action="">
          {/* <input  className="connect__input"
            type="text"
            name="house-name"
            id="house-name"
            placeholder="House Name"
          /> */}
          <input
            className="connect__input--user-name"
            type="text"
            name="user-name"
            id="user-name"
            placeholder="User Name"
          />
          <input
            className="connect__input--email"
            type="text"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="connect__input--pass"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select className="connect__input--color" name="color" id="color">
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="plum">Plum</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
          <select className="connect__input--icon" name="icon" id="icon">
            <option value="user1">user1</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
            <option value="user4">user4</option>
          </select>
        </form>
        <Link className="connect__cta" to={`/dashboard`}>
          <button className="connect__cta--btn">JOIN</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
