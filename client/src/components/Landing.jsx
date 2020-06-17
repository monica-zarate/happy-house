import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";

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
      if 
  }

  render() {
    return <div className="landing"></div>;
  }
}

export default Landing;
