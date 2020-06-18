import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function Join(props) {
  return (
    <div>
      <button>Create a new Happy House</button>
      <div>
        <h2>Let's build your Happy House</h2>
        <form action="">
          <input
            type="text"
            name="house-name"
            id="house-name"
            placeholder="House Name"
          />
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="User Name"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select name="color" id="color">
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="plum">Plum</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
          <select name="icon" id="icon">
            <option value="user1">user1</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
            <option value="user4">user4</option>
          </select>
        </form>
        <Link to={`/dashboard`}>
          <button>JOIN</button>
        </Link>
      </div>
      <button>Join an existing Happy House</button>
      <div>
        <h2>Enter your House Name</h2>
        <form action="">
          <input
            type="text"
            name="happy-house-name"
            id="happy-house-name"
            placeholder="Happy House Name"
          />
          <button>Join</button>
        </form>
      </div>
      <div>
        <form action="">
          <input
            type="text"
            name="house-name"
            id="house-name"
            placeholder="House Name"
          />
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="User Name"
          />
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Password"
          />
          <select name="color" id="color">
            <option value="pink">Pink</option>
            <option value="green">Green</option>
            <option value="plum">Plum</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
          </select>
          <select name="icon" id="icon">
            <option value="user1">user1</option>
            <option value="user2">user2</option>
            <option value="user3">user3</option>
            <option value="user4">user4</option>
          </select>
        </form>
        <Link to={`/dashboard`}>
          <button>JOIN</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
