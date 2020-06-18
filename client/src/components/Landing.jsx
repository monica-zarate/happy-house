import React from "react";
import "./styles/main.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/icons/hh-landing.svg";

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
        this.setState({ house: response.data });
      })
      .catch((error) => console.log(error));
  }
  // Not sure if it needs to be here
  componentDidMount() {}

  //   After Log-in get House information given it's name/ID
  componentDidUpdate() {
    let houseName = this.props.match.params.houseName;
    this.getHouse(houseName);
  }

  render() {
    return (
      <div className="landing">
        <h1 className="landing__title">Happy House</h1>
        <img className="landing__logo" src={logo} alt="happy house logo" />
        <div className="landing__wrapper">
          <Link className="landing__join" to={`/join`}>
            <button className="landing__join--btn">JOIN</button>
          </Link>
          <Link className="landing__login" to={`/login`}>
            <button className="landing__login--btn">LOG IN</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
