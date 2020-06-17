import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import House from "./components/House";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={House} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
