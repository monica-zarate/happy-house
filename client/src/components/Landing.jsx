import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";
import logo from "../assets/icons/hh-landing.svg";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <h1 className="landing__title">Happy House</h1>
        <img className="landing__logo" src={logo} alt="happy house logo" />
        <p className="landing__description">A tidy home sparks joy</p>
        <div className="landing__wrapper">
          <Link onClick={this.joinClick} className="landing__link" to={`/join`}>
            <button className="landing__btn">JOIN</button>
          </Link>

          <Link className="landing__link" to={`/login`}>
            <button className="landing__btn">LOG IN</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
