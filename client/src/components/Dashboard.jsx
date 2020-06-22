import React from "react";
import "./styles/main.css";
import { Route, Switch, Redirect } from "react-router-dom";
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
      comments: [],
    },
  };
  //   API call to retrieve House Data then assigning Data to House State.
  getHouse(houseName) {
    Axios.get(`${housesApi}${houseName}`)
      .then((response) => {
        this.updateHouseHandler(response.data);
        console.log(this.props);
      })
      .catch((error) => console.log(error));
  }

  updateHouseHandler(houseResponse) {
    this.setState({ house: houseResponse });
  }

  componentDidMount() {
    let name = this.props.user.houseName;
    console.log("Bringing Happy House: " + name);
    this.getHouse(name);
  }

  render() {
    // Redirect to Landing Component if houseName is empty, to ensure only logged in users can navigate the site's Routes
    if (this.props.houseName === "") {
      return <Redirect to="/" />;
    }
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
