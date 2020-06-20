import React from "react";
import "./styles/main.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/icons/hh-landing.svg";
import Join from "./Join";
import LogIn from "./LogIn";

// API
const housesApi = "http://localhost:5000/houses/";

class Landing extends React.Component {
  // Set blank state
  state = {
    house: {
      id: "",
      houseName: "",
      users: [],
      toDos: [],
      comments: [],
    },
  };

  //   API call to retrieve Houses Data then assigning data to State.
  getHouse(houseName) {
    Axios.get(`${housesApi}${houseName}`)
      .then((response) => {
        console.log(response);
        this.setState({ house: response.data });
      })
      .catch((error) => console.log(error));
  }
  // Not sure if it needs to be here
  componentDidMount() {
    // let houseName = this.props.match.params.houseName;
    this.getHouse("test-house");
  }

  //   After Log-in get House information given it's name/ID
  componentDidUpdate() {}

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
