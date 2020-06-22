import React from "react";
import "./styles/main.css";
import Axios from "axios";
import Header from "./Header";
import Calendar from "./Calendar";
import { Redirect } from "react-router-dom";
import Wall from "./Wall";
import Profile from "./Profile";
import House from "./House";
import { Route, Switch } from "react-router-dom";

// API
const housesApi = "http://localhost:5000/houses/";

class Dashboard extends React.Component {
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
        this.updateHouseHandler(response.data);
        console.log(this.props);
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    let name = this.props.user.houseName;
    console.log("Bringing housename " + name);
    this.getHouse(name);
  }

  updateHouseHandler(houseResponse) {
    this.setState({ house: houseResponse });
  }

  componentDidUpdate() {}

  render() {
    if (this.props.houseName === "") {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header
          house={this.state.house}
          user={this.props.user}
          updateHouseHandler={this.updateHouseHandler.bind(this)}
          userStateUpdateMethod={this.props.userStateUpdateMethod}
        />
        <Switch>
          <Route
            exact
            path="/dashboard/"
            render={() => <Calendar toDos={this.state.house.toDos} />}
          />
          <Route
            path="/dashboard/profile"
            render={() => <Profile user={this.props.user} />}
          />
          <Route
            path="/dashboard/my-house"
            render={() => <House house={this.state.house} />}
          />
          <Route
            path="/dashboard/wall"
            render={() => <Wall house={this.state.house} />}
          />
        </Switch>
      </>
    );
  }
}

export default Dashboard;
