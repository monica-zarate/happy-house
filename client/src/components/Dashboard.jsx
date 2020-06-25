import React from "react";
import "./styles/main.css";
import { Route, Switch } from "react-router-dom";
import Axios from "axios";
import Header from "./Header";
import Calendar from "./Calendar";
import Wall from "./Wall";
import Profile from "./Profile";
import House from "./House";

// Houses API
const housesApi = "http://localhost:5000/houses/";

class Dashboard extends React.Component {
  // Set blank state for House
  state = {
    house: {
      id: "",
      houseName: "",
      users: [],
      toDos: [],
      toDosPerDay: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      },
      comments: [],
    },
  };
  //   API call to retrieve House Data then assigning Data to House State.
  getHouse(houseName) {
    if (houseName !== "") {
      Axios.get(`${housesApi}${houseName}`)
        .then((response) => {
          this.updateHouseHandler(response.data);
          console.log(this.props);
        })
        .catch((error) => console.log(error));
    }
  }

  // updateHouseHandler Method to update House State and pass as props to Header and House Components
  updateHouseHandler(houseResponse) {
    this.setState({ house: houseResponse });
  }

  // Getting the House the logged-in user belongs to
  componentDidMount() {
    let name = this.props.user.houseName;
    console.log("Bringing Happy House: " + name);
    this.getHouse(name);
  }

  render() {
    return (
      <>
        <Header
          house={this.state.house}
          updateHouseHandler={this.updateHouseHandler.bind(this)}
          user={this.props.user}
          userStateUpdateMethod={this.props.userStateUpdateMethod}
        />
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() => (
              <Calendar
                toDos={this.state.house.toDosPerDay}
                user={this.props.user}
              />
            )}
          />
          <Route
            path="/dashboard/profile"
            render={() => <Profile user={this.props.user} />}
          />
          <Route
            path="/dashboard/my-house"
            render={() => (
              <House
                house={this.state.house}
                user={this.props.user}
                updateHouseHandler={this.updateHouseHandler.bind(this)}
              />
            )}
          />
          <Route
            path="/dashboard/wall"
            render={() => (
              <Wall house={this.state.house} user={this.props.user} />
            )}
          />
        </Switch>
      </>
    );
  }
}

export default Dashboard;
