import React from "react";
import "./styles/main.css";
import Header from "./Header";
import Calendar from "./Calendar";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Calendar />
      </>
    );
  }
}

export default Dashboard;
