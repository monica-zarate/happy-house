import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function LogIn(props) {
  return (
    <div className="login">
      <h1 className="login__title">Welcome back!</h1>
      <form className="login__form" action="">
        <input
          className="login__input"
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input
          className="login__input"
          type="text"
          name="username"
          id="username"
          placeholder="password"
        />
      </form>
      <Link className="login__cta" to={`/dashboard`}>
        <button className="login__cta--btn">Sign In</button>
      </Link>
    </div>
  );
}

export default LogIn;
