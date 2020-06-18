import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboard(props) {
  return (
    <div>
      <Header />
      <main>
        <div>
          <p>WED</p>
          <p>17</p>
        </div>
        <div>
          <p>Activity</p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
