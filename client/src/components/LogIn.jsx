import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function LogIn(props) {
  return (
    <div>
      <h1>Welcome back!</h1>
      <input type="text" name="username" id="username" placeholder="username" />
      <input type="text" name="username" id="username" placeholder="password" />
      <Link to={`/dashboard`}>
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default LogIn;
