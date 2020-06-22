import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import LogIn from "./components/LogIn";
import Join from "./components/Join";
import Dashboard from "./components/Dashboard";
import Wall from "./components/Wall";
import Profile from "./components/Profile";
import House from "./components/House";

class App extends React.Component {
  state = {
    house: {
      id: "",
      houseName: "",
      users: [],
      toDos: [],
      comments: [],
    },
    user: {
      id: "",
      userName: "",
      email: "",
      password: "",
      houseName: "",
      color: "",
    },
  };

  houseStateUpdateHandler(houseResponse) {
    this.setState({ house: houseResponse });
  }
  userStateUpdateHandler(userResponse) {
    this.setState({ user: userResponse });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Landing} exact />

          <Route
            path="/login"
            render={() => (
              <LogIn
                userStateUpdateMethod={this.userStateUpdateHandler.bind(this)}
                user={this.state.user}
              />
            )}
          />
          <Route path="/join" component={Join} />
          <Route
            path="/dashboard"
            render={() => (
              <Dashboard
                updateHandler={this.houseStateUpdateHandler.bind(this)}
                house={this.state.house}
                houseName={this.state.user.houseName}
                user={this.state.user}
              />
            )}
          />
          <Route path="/wall" component={Wall} />
          <Route
            path="/profile"
            render={() => (
              <Profile house={this.state.house} user={this.state.user} />
            )}
          />
          <Route
            path="/my-house"
            render={() => (
              <House house={this.state.house} user={this.state.user} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
