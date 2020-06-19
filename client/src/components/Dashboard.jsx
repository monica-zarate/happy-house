import React from "react";
import "./styles/main.css";
// import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Header />
      <main className="calendar">
        <div className="calendar__date">
          <p className="calendar__date--dotw">WED</p>
          <p className="calendar__date--day">17</p>
        </div>
        <div className="calendar__activity-wrapper">
          <p className="calendar__description">Activity</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
