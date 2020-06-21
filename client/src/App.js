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
  };

  houseStateUpdateHandler(houseResponse) {
    this.setState({ house: houseResponse });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Landing} exact />

          <Route path="/login" component={LogIn} />
          <Route path="/join" component={Join} />
          <Route
            path="/dashboard"
            render={() => (
              <Dashboard
                updateHandler={this.houseStateUpdateHandler.bind(this)}
                house={this.state.house}
              />
            )}
          />
          <Route path="/wall" component={Wall} />
          <Route
            path="/profile"
            render={() => <Profile house={this.state.house} />}
          />
          <Route
            path="/my-house"
            render={() => <House house={this.state.house} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
