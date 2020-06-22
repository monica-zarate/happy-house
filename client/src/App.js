import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import LogIn from "./components/LogIn";
import Join from "./components/Join";
import Dashboard from "./components/Dashboard";

class App extends React.Component {
  // Set blank state
  state = {
    user: {
      id: "",
      userName: "",
      email: "",
      password: "",
      houseName: "",
      color: "",
    },
  };

  // Set State Handler to use as Props for LogIn and Dashboard Components
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
            render={({ match }) => (
              <Dashboard
                userStateUpdateMethod={this.userStateUpdateHandler.bind(this)}
                user={this.state.user}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
