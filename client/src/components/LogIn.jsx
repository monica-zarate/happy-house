import React from "react";
import "./styles/main.css";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

// Users API
const usersApi = "http://localhost:5000/users/";

class LogIn extends React.Component {
  // loginHandler to validate User Name and Password
  loginHandler = (event) => {
    let userName = document.getElementById("username");
    let password = document.getElementById("password");
    event.preventDefault();
    Axios.get(`${usersApi}${userName.value}`).then((response) => {
      // If User Name exists set State
      if (response.data.password === password.value) {
        console.log("Correct user");
        this.props.userStateUpdateMethod(response.data);
      } else {
        // If User Name does not exists
        console.log("Incorrect user");
        alert("Incorrect User Name or Password, please try again.");
      }
    });
  };
  render() {
    if (this.props.user.houseName !== "") {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="login">
        <h1 className="login__title">Welcome back!</h1>
        <form className="login__form" action="">
          <input
            className="login__input"
            type="text"
            name="username"
            id="username"
            placeholder="User Name"
          />
          <input
            className="login__input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </form>
        <Link
          className="login__cta"
          to={`/dashboard`}
          onClick={this.loginHandler}
        >
          <button className="login__cta--btn">Sign In</button>
        </Link>
        <Link className="login__cta" to={`/`}>
          <button className="login__cta--cancel">Cancel</button>
        </Link>
      </div>
    );
  }
}

export default LogIn;
