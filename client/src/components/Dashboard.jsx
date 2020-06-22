import React from "react";
import "./styles/main.css";
import Axios from "axios";
import Header from "./Header";
import Calendar from "./Calendar";
import { Redirect } from "react-router-dom";

// API
const housesApi = "http://localhost:5000/houses/";

class Dashboard extends React.Component {
  //   API call to retrieve Houses Data then assigning data to State.
  getHouse(houseName) {
    Axios.get(`${housesApi}${houseName}`)
      .then((response) => {
        this.props.updateHandler(response.data);
        console.log(this.props);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    let name = this.props.houseName;
    console.log("Bringing housename " + name);
    this.getHouse(name);
  }

  componentDidUpdate() {}

  render() {
    if (this.props.houseName === "") {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header house={this.props.house} user={this.props.user} />
        <Calendar toDos={this.props.house.toDos} />
      </>
    );
  }
}

export default Dashboard;
