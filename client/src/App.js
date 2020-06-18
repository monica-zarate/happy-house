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
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Landing} exact />

          <Route path="/login" component={LogIn} />
          <Route path="/join" component={Join} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/wall" component={Wall} />
          <Route path="/profile" component={Profile} />
          <Route path="/my-house" component={House} />
        </Switch>
      </div>
    );
  }
}

export default App;
