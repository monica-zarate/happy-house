import React from "react";
import "./styles/main.css";
import Axios from "axios";
import Header from "./Header";
import Calendar from "./Calendar";

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
    // let houseName = this.props.match.params.houseName;
    this.getHouse("test-house");
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <Header house={this.props.house} />
        <Calendar toDos={this.props.house.toDos} />
      </>
    );
  }
}

export default Dashboard;
